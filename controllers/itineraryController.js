const Itinerary = require('../models/Itinerary')

const itineraryController = {

  allItineraries: (req,res) => {
    Itinerary.find().populate('cityId')
    .then(data => res.json({success: true, response: data}))
    .catch(error => res.json({succes: false, error}))
  },

  addItinerary: (req, res) => {
    const {title, userPic, userName, likes, hours, price, hashtag, activities, comments} = req.body
    const saveItinerary = new Itinerary({
      cityId, title, userPic, userName, likes, hours, price, hashtag, activities, comments
    })
    saveItinerary.save()
    .then(saveItinerary=> res.json({success:true, response: saveItinerary}))
    .catch(error => res.json({success:false, error}))
  },

  itineraryByCity: (req, res) => {
    const {id} = req.params
    Itinerary.find({cityId: id}).populate('cityId')
    .then(data => res.json({success: true, response: data}))
    .catch(error => res.json({succes: false, error}))
  },

  updateItinerary: (req,res) => {
    const id = req.params.id
    Itinerary.findByIdAndUpdate(id, req.body)
    .then(itineraryUpdated => {res.json({succes: true, itineraryUpdated})})
    .catch(error => {res.json({succes: false, error})})
  }
}

module.exports = itineraryController