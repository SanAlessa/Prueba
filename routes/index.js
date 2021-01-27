const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')

router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/cities/:id')
// .get(cityController.eachCity)
.get(itineraryController.allItineraries)
.post(itineraryController.addItinerary)

module.exports = router