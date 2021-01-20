const City = require('../models/City')

// const data = [
//   {src: './assets/banners/BuenosAires.jpg', titulo: 'Buenos Aires', id: 1},
//   {src: './assets/banners/paris.jpg', titulo: 'Paris', id: 2},
//   {src: './assets/banners/Barcelona.jpg', titulo: 'Barcelona', id: 3},
//   {src: './assets/madrid.jpg', titulo: 'Madrid', id: 4},
//   {src: './assets/banners/cordoba.png', titulo: 'Cordoba', id: 5},
//   {src: './assets/banners/NewYork.jpg', titulo: 'New York', id: 6},
//   {src: './assets/banners/tokyo.jpg', titulo: 'Tokyo', id: 7},
//   {src: './assets/venecia.jpg', titulo: 'Venice', id: 8},
//   {src: './assets/banners/Londres.jpg', titulo: 'London', id: 9},
//   {src: './assets/Berlin.jpg', titulo: 'Berlin', id: 10},
//   {src: './assets/banners/Shangai.jpg', titulo: 'Shangai', id: 11},
//   {src: './assets/banners/Sidney.jpg', titulo: 'Sidney', id: 12},
//   {src: './assets/banners/florencia.jpg', titulo: 'Florence', id: 13},
//   {src: './assets/banners/Rome.jpg', titulo: 'Rome', id: 14},
//   {src: './assets/banners/udaipur.jpg', titulo: 'Udaipur', id: 15}
// ]

const itineraryController = {
  // addCity es el encargado de añadir cada elemento a la base de datos

  addCity: (req, res) => {
    const {cityName: title, cityPic: pic} = req.body
    const citySave = new City({
      cityName: title,
      cityPic: pic
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


  allItineraries: async (req, res) => {
    // Devolver al frontend la lista de todos las ciudades
    const data = await City.find()
    // Pedirle a la base de datos todos los elementos disponibles, esa info se almacena en variable data.
    res.json({
      response: data
    })
  },

  eachItinerary: (req, res) => {
    // devolver al frontend unicamente el elemento solicitado (por ID)
    // Solicito (req) a la data algo especifico y cuando lo tengo le doy una res al frontend.
    const id = parseInt(req.params.id)
    data.map(element => {
      element.id === id && res.json({
        response: element
      })
    })
  }
}

module.exports = itineraryController