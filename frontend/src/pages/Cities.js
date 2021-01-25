import SemiHero from '../components/SemiHero'
import React, {useEffect, useState} from 'react'
import City from '../components/City'
import Preloader from '../components/Preloader'
import NoItineraries from '../components/NoItineraries'


// Componente correspondiente a la pagina Cities que va a llamar a los respectivos componentes.
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
  window.scrollTo(0,0)
  },[])

  // Filtro para poder buscar diferentes ciudades.
  useEffect(()=>{
    setAFiltrar(ciudades.filter(ciudad => ciudad.cityName.toUpperCase().indexOf(inputValue.toUpperCase()) === 0))
  },[inputValue, ciudades])

  // Funcion encargada de comparar si la data esta cargada o no y retorna el preloader. En caso de no haber ciudades devuelve un componente con una card especifica.
  const comparator =()=> {
    if(loading){
      return <Preloader/> 
    } 
    if(aFiltrar.length===0) {
      return <NoItineraries/>
    }
  }
  return(
    <>
    <SemiHero/>
    <section className="cities">
      <input autoComplete="off" className="input" onChange={(e)=>setInputValue(e.target.value)} type="text" name="nombre" 
        placeholder='Search Cities' style={{fontSize: '2.5vh'}} />
      {comparator()}
      <div className="cities">
        {aFiltrar.map(({cityPic, cityDescription, cityName, _id})=> {
          return <City key={_id} cityPic={cityPic} cityDescription={cityDescription} cityName={cityName} _id={_id} /> })}
      </div>
    </section>
    </>
  )
}
export default Cities