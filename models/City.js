const mongoose = require ('mongoose')

const cityScheme = new mongoose.Schema({
  cityName: {type: String, required: true},
  cityDescription: {type: String, required: true},
  cityPic: {type: String, required: true}
})

const City = mongoose.model('city', cityScheme)

module.exports = City