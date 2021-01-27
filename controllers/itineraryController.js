const Itinerary = require('../models/Itinerary')

const itineraryController = {

  allItineraries: (req,res) => {
    Itinerary.find()
    .then(data => res.json({success: true, response: data}))
    .catch(error => res.json({succes: false, error}))
  },


  addItinerary: (req, res) => {
    const {title, userPic, userName, likes, hours, price, hashtag, activities, comments} = req.body
    const saveItinerary = new Itinerary({
      title, userPic, userName, likes, hours, price, hashtag, activities, comments
    })
    saveItinerary.save()
    .then(saveItinerary=> res.json({success:true, response: saveItinerary}))
    .catch(error => res.json({success:false, error}))
  }
}

module.exports = itineraryController