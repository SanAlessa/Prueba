const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
  cityId: {type: mongoose.Schema.ObjectId, ref: 'city'},
  title: {type: String, required: true},
  userPic: {type: String, required: true},
  userName: {type: String, required: true},
  likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
  hours: {type: Number, required: true},
  price: {type: Number, required: true},
  hashtag: [String],
  activities: [
    {image: {type: String, required: true}, title: {type: String, required: true}}
  ],
  comments: [
    {userPic: String, userName: String, comment: String}
  ],
}, {timestamps: true})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary