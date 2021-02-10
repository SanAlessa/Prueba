const User = require('../models/User')
const bcryptjs = require ('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
  signUp: async (req, res) => {
    var errors = []
    const {firstname, lastname, username, country, email, image, password, rol} = req.body
    const userExists = await User.findOne({email: email})
    if(userExists){
      var error = {context: {label: 'email'}, message: 'This email is already in use'}
      errors.push(error)
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
                    response: errors.length === 0 && {token, name: newUserSaved.firstname, pic: newUserSaved.image, username: newUserSaved.username, id: newUserSaved._id}})
  },
  
  logIn: async (req, res) => {
    var errors = []
    const {email, password} = req.body
    const userExists = await User.findOne({email: email})
    if(!userExists){
      return res.json({success:false, response: 'Email or password are not correct'})
    }
    const passwordMatches = bcryptjs.compareSync(password, userExists.password)
    if(!passwordMatches){
      return res.json({success: false, response: 'Email or password are not correct'})
    }
    var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
    return res.json({success:true, response: {token, name: userExists.firstname, pic: userExists.image, username: userExists.username, id: userExists._id}})
  },

  logFromLStorage: async (req, res) => {
    res.json({succes: true, response: {token: req.body.token, name: req.user.firstname, pic: req.user.image, username: req.user.username, id: req.user._id}})
  }
} 

module.exports = userController