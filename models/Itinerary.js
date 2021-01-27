const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
  title: {type: String, required: true},
  userPic: {type: String, required: true},
  userName: {type: String, required: true},
  likes: {type: Number, default: 0},
  hours: {type: Number, required: true},
  price: {type: Number, required: true},
  hashtag: [String],
  activities: [{image: String, title: String}],
  comments: [{userPic: String, userName: String, comment: String}]
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary