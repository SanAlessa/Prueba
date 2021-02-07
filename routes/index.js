const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')
const userController = require ('../controllers/userController')
const validator = require('../controllers/validator')
const commentController = require('../controllers/commentController')
const likeController = require('../controllers/likeController')
const passport = require('passport')
require('../config/passport')

router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/cities/:id')
.get(cityController.eachCity)

router.route('/itineraries')
.get(itineraryController.allItineraries)
.post(itineraryController.addItinerary)

router.route('/itineraries/:id')
.get(itineraryController.itineraryByCity)
.delete(itineraryController.deleteItinerary)

router.route('/itinerary/:id')
.put(itineraryController.updateItinerary)

router.route('/signup')
.post(validator.validateNewAccount, userController.signUp)

router.route('/login')
.post(userController.logIn)

router.route('/login/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLStorage)

router.route('/comments')
.post(passport.authenticate('jwt', {session: false}),commentController.addComment)
.put(passport.authenticate('jwt', {session: false}),commentController.deleteComment)

router.route('/comments/update')
.put(passport.authenticate('jwt', {session: false}), commentController.updateComment)

router.route('/likes')
.post(passport.authenticate('jwt', {session: false}), likeController.like)

router.route('/dislike')
.post(passport.authenticate('jwt', {session: false}), likeController.dislike)


module.exports = router