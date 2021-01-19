const express = require('express')
const router = express.Router()
const itineraryController = require('../controllers/itineraryController')

router.route('/cities')
.get(itineraryController.allItineraries)
router.route('/cities/:id')
.get(itineraryController.eachItinerary)

module.exports = router