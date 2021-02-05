const User = require('../models/User')
const bcryptjs = require ('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
  signUp: async (req, res) => {
    var errors = []
    const {firstname, lastname, username, country, email, image, password, rol} = req.body
    const userExists = await User.findOne({username: username})
    if(userExists){
      errors.push("This user it's already been taken")
    }
    if(errors.length === 0){
      const passwordHashed = bcryptjs.hashSync(password, 10)
      
      var newUser = new User({
        firstname, lastname, username, email, image, password: passwordHashed, rol, country
      })
      var newUserSaved = await newUser.save()
      var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY,{})
    }
    return res.json({success: errors.length === 0 ? true : false,
                    errors: errors,
                    response: errors.length === 0 && {token, name: newUserSaved.firstname, pic: newUserSaved.image}})
  },
  
  logIn: async (req, res) => {
    const {username, password} = req.body
    const userExists = await User.findOne({username: username})
    if(!userExists){
      return res.json({success:false, response: 'Username or password are not correct'})
    }
    const passwordMatches = bcryptjs.compareSync(password, userExists.password)
    if(!passwordMatches){
      return res.json({success: false, response: 'Username or password are not correct'})
    }
    var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
    return res.json({success:true, response: {token, name: userExists.firstname, pic: userExists.image}})
  },

  logFromLStorage: async (req, res) => {
    res.json({succes: true, response: {token: req.body.token, name: req.user.firstname, pic: req.user.image}})
  }
} 

module.exports = userController