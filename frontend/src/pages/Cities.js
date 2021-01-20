import Header from '../components/Header'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Cities = () => {
  const [ciudades, setCiudades] = useState([])
  const [aFiltrar, setAFiltrar] = useState([])  
  
  useEffect(()=>{
  fetch('http://localhost:4000/api/cities')
  .then(response=> response.json())
  .then(data => {
    console.log(data.response[0].cityPic)
    setCiudades(data.response)
    setAFiltrar(data.response)
  })
  },[])

  const leerInput = (e) => {
    var valor = e.target.value
    const filtroCiudades = aFiltrar.filter(ciudad =>{
      return ciudad.cityName.toUpperCase().indexOf(valor.toUpperCase()) === 0
    })
    setCiudades(filtroCiudades)
  }

  return(
    <>
    <Header/>
    <h1 className="hCities">CITIES</h1>
    <img src="" alt="avion" style={{width: '10 vw'}} />
    <section className="cities">
      <input autoComplete="off" className="input" onChange={leerInput} type="text" name="nombre" 
        placeholder="Which cities are you looking for?" />
      <div className="cities">
      {ciudades.map(({cityPic, cityName, _id}) => {
        return (
          <Link key={_id} className="toItinerary" to={`/cities/${_id}`}>
            <div className="city" style={{backgroundImage: `url("${cityPic}")`}}>
              <h5>{cityName}</h5> 
            </div>
          </Link>
        )
      })}
      </div>
    </section>
    </>
  )
}
export default Cities