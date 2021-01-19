import Header from '../components/Header'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Cities = () => {
  const [ciudades, setCiudades] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/api/cities')
    .then(response=> response.json())
    .then(data => setCiudades(data.response))

  }, [])
  return(
    <>
    <Header/>
    <section className="cities">
      {ciudades.map(({src, titulo, id}) => {
        return (
          <Link key={id} className="toItinerary" to={`/cities/${id}`}>
            <div className="city" style={{backgroundImage: `url("${src}")`}}>
              <h5>{titulo}</h5> 
            </div>
          </Link>
        )
      })}
    </section>
    </>
  )
}
export default Cities