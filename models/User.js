const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  country: String,
  email: String,
  image: String,
  password: String,
  rol: {type: String, default: 'nonadmin'},
  likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'itinerary'}]
})

const User = mongoose.model('user', userSchema)
module.exports = User 