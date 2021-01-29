// Pagina itineraries para cada ciudad donde se ejecuta el header de la misma y el cta GoBack.

import { connect } from "react-redux";
import { useEffect, useState } from "react"
import CityHeader from './CityHeader'
import GoBack from './GoBack';
import itinerariesActions from "../redux/actions/itinerariesActions"
import NoItineraries from '../components/NoItineraries'
import Itineraries from '../components/Itineraries'

const City =(props)=> {
  const [city, setCity] = useState({})
  const id = props.match.params.id

  useEffect(()=> {
    var ciudad = props.oneCity.filter(city => city._id === id)
    setCity(ciudad[0])
    props.getItineraries(id)
    window.scrollTo(0, 0)
  }, [id])

  const comparator=()=>{
    if(props.allItineraries.length === 0){
      return <NoItineraries/>
    }
  }

  return (
    <>
    <CityHeader city={city}/>
    {comparator()}
    {props.allItineraries.map(itinerary => {
      return <Itineraries key={itinerary._id} itinerary={itinerary}/>
    })}
    <GoBack/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    oneCity: state.citiesR.cities,
    allItineraries: state.itinerariesR.itineraries
  }
}
const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(City)