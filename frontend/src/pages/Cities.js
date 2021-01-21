import Header from '../components/Header'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
// import City from '../components/City'

const Cities = () => {
  const [inputValue, setInputValue] = useState('')
  const [ciudades, setCiudades] = useState([])
  const [aFiltrar, setAFiltrar] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
  fetch('http://localhost:4000/api/cities')
  .then(response=> response.json())
  .then(data => {
    setCiudades(data.response)
    setAFiltrar(data.response)
    setLoading(false)
  })
  .catch(error => console.log(error))
  },[])

  useEffect(()=>{
    setAFiltrar(ciudades.filter(ciudad => ciudad.cityName.toUpperCase().indexOf(inputValue.toUpperCase().trim()) === 0))
  },[inputValue])

  return(
    <>
    <Header/>
    <div className="divTitleImg">
      <img src="../assets/avion2.png" alt="avion" className="avionL" style={{width: '30vw'}} />
      <h1 className="hCities">CITIES</h1>
      <img src="../assets/avion.png" alt="avion" className="avionR" style={{width: '30vw'}} />
    </div>
    <section className="cities">
      <input autoComplete="off" className="input" onChange={(e)=>setInputValue(e.target.value)} type="text" name="nombre" 
        placeholder="Which cities are you looking for?" />
      <div className="cities">
        {aFiltrar.length > 0 
        ? (
          aFiltrar.map(({cityPic, cityName, _id}) => {
            return (
              <Link key={_id} className="toItinerary" to={`/cities/${_id}`}>
              <div className="city" style={{backgroundImage: `url("${cityPic}")`}}>
                <h5>{cityName}</h5> 
              </div>
            </Link>
              // <City cityPic={cityPic} cityName={cityName} id={_id} />
            )
          })
        )
        : (
          <h1>NO HAY CIUDADES</h1>
        )}
      {/* {aFiltrar.map(({cityPic, cityName, _id}) => {
        return (
          <Link key={_id} className="toItinerary" to={`/cities/${_id}`}>
            <div className="city" style={{backgroundImage: `url("${cityPic}")`}}>
              <h5>{cityName}</h5> 
            </div>
          </Link>
        )
      })} */}
      </div>
    </section>
    </>
  )
}
export default Cities