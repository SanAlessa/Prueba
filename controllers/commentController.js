const { response } = require('express')
const Itinerary = require('../models/Itinerary')

const commentController = {
  addComment: (req,res) => {
    const id = req.body.id
    Itinerary.findOneAndUpdate(
      {_id: id},
      {$push: {comments: 
        {userPic: req.user.image, userName: req.user.username, userLastname: req.user.lastname, comment: req.body.comment, userId: req.user.id }}},
      {new: true}
    )
    .then(itineraryModified => res.json({success: true, response: itineraryModified}))
    .catch(error => res.json({success: false, error}))
  },

  updateComment: (req, res) => {
    const commentId = req.body.idComment
    const itineraryId= req.body.idItinerary
    Itinerary.findOneAndUpdate(
      {_id: itineraryId, 'comments._id': commentId}, // comparo el _id que me otorga mongoose del itinerario y del subdocumento comentario con el que le mando desde el front.
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