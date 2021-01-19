const data = [
  {src: './assets/BsAs.jpg', titulo: 'Buenos Aires', id: 1},
  {src: './assets/Paris.jpg', titulo: 'Paris', id: 2},
  {src: './assets/Barcelona.jpg', titulo: 'Barcelona', id: 3},
  {src: './assets/madrid.jpg', titulo: 'Madrid', id: 4},
  {src: './assets/Cordoba.jpg', titulo: 'Cordoba', id: 5},
  {src: './assets/NY.jpg', titulo: 'New York', id: 6},
  {src: './assets/tokyo.jpg', titulo: 'Tokyo', id: 7},
  {src: './assets/venecia.jpg', titulo: 'Venice', id: 8},
  {src: './assets/Londres.jpg', titulo: 'London', id: 9},
  {src: './assets/Berlin.jpg', titulo: 'Berlin', id: 10},
  {src: './assets/Shangai.jpg', titulo: 'Shangai', id: 11},
  {src: './assets/sydney.jpg', titulo: 'Sidney', id: 12},
  {src: './assets/Berlin.jpg', titulo: 'Berlin', id: 13},
  {src: './assets/Shangai.jpg', titulo: 'Shangai', id: 14},
  {src: './assets/sydney.jpg', titulo: 'Sidney', id: 15}
]

const itineraryController ={
  allItineraries: (req, res) => {
    // Devolver al frontend la lista de todos las ciudades
    
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