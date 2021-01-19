import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const Itineraries =()=>{
  const [ciudades, setCiudades] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/api/cities')
    .then(response=> response.json())
    .then(data => setCiudades(data.response))


  }, [])
  return(
    ciudades.map(({src, titulo, id}) => {
      return (
        <Link className="toItinerary" to={`/cities/${id}`}>
          <div key={id} className="city" style={{backgroundImage: `url("${src}")`}}>
            <h5>{titulo}</h5> 
          </div>
        </Link>
      )
    })
  )
}

export default Itineraries