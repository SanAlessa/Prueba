const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')
const userController = require ('../controllers/userController')
const validator = require('../controllers/validator')

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

router.route('/itinerary/:id')
.put(itineraryController.updateItinerary)

router.route('/signup')
.post(validator.validateNewAccount, userController.signUp)

router.route('/login')
.post(userController.logIn)

module.exports = router