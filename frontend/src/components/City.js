// Pagina itineraries para cada ciudad donde se ejecuta el header de la misma y el cta GoBack.

import { connect } from "react-redux";
import { useEffect, useState } from "react"
import CityHeader from './CityHeader'
import GoBack from './GoBack';
import itinerariesActions from "../redux/actions/itinerariesActions"
import NoItineraries from '../components/NoItineraries'
import Itinerary from '../components/Itinerary'
// import Preloader from "./Preloader";

const City =(props)=> {
  const [city, setCity] = useState({})
  const id = props.match.params.id
  const {cities, getItineraries} = props

  useEffect(()=> {
    var ciudad = cities.filter(city => city._id === id)
    setCity(ciudad[0])
    getItineraries(id)
    window.scrollTo(0, 0)
    cities.length === 0 && props.history.push('/cities')
  }, [id, getItineraries, cities, props.history])
  console.log(city)

  const comparator=()=>{
    if(props.allItineraries.length === 0) {
      return <NoItineraries/>
    }}

  return (
    <>
    <CityHeader city={city}/>
    <h3 style={{textAlign: "center"}}>Available Itineraries for {city.cityName}</h3>
    {comparator()}
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
  getItineraries: itinerariesActions.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(City)