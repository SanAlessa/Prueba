// Componente City para cada ciudad donde se ejecuta el header de la misma y el cta GoBack.

import { connect } from "react-redux";
import { useEffect, useState } from "react"
import CityHeader from './CityHeader'
import GoBack from './GoBack';
import itinerariesActions from "../redux/actions/itinerariesActions"
import NoItineraries from '../components/NoItineraries'
import Itinerary from '../components/Itinerary'
import Preloader from "./Preloader";
import cityActions from "../redux/actions/cityActions";

const City =(props)=> {
  const [loading, setLoading] = useState(true)
  const id = props.match.params.id
  const {getItineraries, getCity, cities} = props

  useEffect(()=> {
    fetchData()
    window.scrollTo(0, 0)
  }, [])

  // Funcion async donde incluyo las funciones de cada funcion que realizan el pedido a la api y esta es quien va a ser llamada en al montarse.
  // Con esto el estado al recargar la pagina se vuelve a llenar y no queda vacio y puedo manipular un estado propio (loading) y puedo trabajar con el preloader.
  const fetchData = async() => {
    await getCity(id)
    await getItineraries(id)
    setLoading(false)
  }

  const comparator=()=>{
    if(loading) {
      return <Preloader/>
    }if(props.allItineraries.length === 0 && !loading) {
      return <NoItineraries/>
    }
  }
  console.log(cities[0])
  return (
    <>
    <CityHeader city={cities[0]}/>
    <h3 style={{textAlign: "center"}}>Available Itineraries for {cities.cityName}</h3>
    <div style={{display: 'flex', justifyContent: 'center'}}>{comparator()}</div>
    {props.allItineraries.map(itinerary => {
      return <Itinerary key={itinerary._id} itinerary={itinerary}/>
    })}
    <GoBack/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesR.cities,
    allItineraries: state.itinerariesR.itineraries
  }
}
const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,
  getCity: cityActions.getCity
}

export default connect(mapStateToProps, mapDispatchToProps)(City)