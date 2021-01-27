const City = require('../models/City')

const cityController = {
  // addCity es el encargado de añadir cada elemento a la base de datos

  addCity: (req, res) => {
    const {cityName, cityPic, cityDescription} = req.body
    const citySave = new City({
      cityName, cityDescription, cityPic
    })
    // tengo que grabar estas ciudades en esta instancia de mi modelo
    citySave.save()
    .then(citySave => {
      return res.json({succes: true, response: citySave})
    })
    .catch(error => {
      return res.json({succes: false, error: error})
    })
  },

  allCities: (req, res) => {
    // Devolver al frontend la lista de todos las ciudades
    // Pedirle a la base de datos todos los elementos disponibles, esa info se almacena en variable data.
    City.find()
    .then(data => {
      return res.json({success: true, response: data})
    })
    .catch(error => {
      return res.json({success: false, error: error})
    })
  },

  eachCity: (req, res) => {
    // devolver al frontend unicamente el elemento solicitado (por ID)
    // Solicito (req) a la data algo especifico y cuando lo tengo le doy una res al frontend.
    const id = req.params.id
   City.findById(id)
    .then(data => {
      return res.json({success: true, response: data})
    })
    .catch(error => {
      return res.json({success: false, error: error})
    })
  },

}

module.exports = cityController