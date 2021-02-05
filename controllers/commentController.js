const Itinerary = require('../models/Itinerary')

const commentController = {
  addComment: (req,res) => {
    const id = req.body.id
    Itinerary.findOneAndUpdate(
      {_id: id},
      {$push: {comments: {userPic: req.user.image, userName: req.user.username, comment: req.body.comment}}},
      {new: true}
    )
    .then(data => res.json({success: true, response: data}))
    .catch(error => res.json({success: false, error}))
  }
}

module.exports = commentController