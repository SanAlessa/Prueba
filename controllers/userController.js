const User = require('../models/User')
const bcryptjs = require ('bcryptjs')

const userController = {
  signUp: async (req, res) => {
    var errors = []
    const {firstname, lastname, username, country, email, image, password, rol} = req.body
    if(firstname === '' || lastname === '' || username === '' || email === '' || image === '' || password === ''){
      errors.push('Cannot be empty')
    }
    if(email.split('@').length !== 2 || email.split('@')[1].split('.').length <2 || email.split('@')[1].split('.').length > 3){
      errors.push('Please enter a valid email address')
    }
    if(password.length < 6){
      errors.push('Must contain 6 characters at least')
    }
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
    }
    return res.json({success: errors.length === 0 ? true : false,
                    errors: errors,
                    response: newUserSaved})
  },
  
  logIn: async (req, res) => {
    const {username, email, password} = req.body
    const userExists = await User.findOne({username:username})
    if(!userExists){
      return res.json({success:false, response: 'Username or password are not correct'})
    }
    const passwordMatches = bcryptjs.compareSync(password, userExists.password)
    if(!passwordMatches){
      return res.json({success: false, response: 'Username or password are not correct'})
    }
    return res.json({success:true})
  }
} 

module.exports = userController