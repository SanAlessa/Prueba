const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')

router.route('/cities')
.get(cityController.allItineraries)
.post(cityController.addCity)

router.route('/city/:id')
.get(cityController.eachItinerary)

module.exports = router