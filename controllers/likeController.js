const Itinerary = require('../models/Itinerary')

const likeController = {
  like: async (req, res) => {
    const itineraryId = req.body.id
    const userId = req.user._id
    await Itinerary.findOneAndUpdate(
      {_id: itineraryId},
      {$addToSet: {likes: userId}},
      {new: true}
    )
    .then(like => {res.json({success:true, response: like})})
    .catch(error => res.json({success: false, error}))
  },

  dislike: (req, res) => {
    Itinerary.findOneAndUpdate(
      {_id: req.body.id},
      {$pull: {likes: req.user._id}},
      {new: true}
    )
    .then(dislike => {res.json({success: true, response: dislike})})
    .catch(error => res.json({succes: false, error}))
  }
}

module.exports = likeController