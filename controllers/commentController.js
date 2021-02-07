const Itinerary = require('../models/Itinerary')

const commentController = {
  addComment: (req,res) => {
    const id = req.body.id
    Itinerary.findOneAndUpdate(
      {_id: id},
      {$push: {comments: {userPic: req.user.image, userName: req.user.username, comment: req.body.comment, }}},
      {new: true}
    )
    .then(comment => res.json({success: true, response: comment}))
    .catch(error => res.json({success: false, error}))
  },

  updateComment: (req, res) => {
    const commentId = req.body.idComment
    const itineraryId= req.body.idItinerary
    Itinerary.findOneAndUpdate(
      {_id: itineraryId, 'comments._id': commentId}, // comparo el _id que me otorga mongoose de el itinerario y del comentario con el que le mando desde el front.
      {$set: {'comments.$.comment': req.body.comment}},
      {new: true}
    )
    .then(data => res.json({success: true, response: data}))
    .catch(error => res.json({success: false, error}))
  },

  deleteComment: (req, res) => {
    const idComment = req.body.idComment
    const idItinerary = req.body.idItinerary
    Itinerary.findOneAndUpdate(
      {_id: idItinerary},
      {$pull: {comments: {_id: idComment}}},
      {new: true}
    )
    .then(data => res.json({success: true, response:data}))
    .catch(error => res.json({success: false, error}))
  }
}

module.exports = commentController