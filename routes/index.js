const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')

router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/cities/:id')
.get(cityController.eachCity)

module.exports = router