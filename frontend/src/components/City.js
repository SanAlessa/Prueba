// Componente City para cada ciudad donde se ejecuta el header de la misma y el cta GoBack.

import { connect } from "react-redux";
import { useEffect, useState } from "react"
import CityHeader from './CityHeader'
import GoBack from './GoBack';
import itinerariesActions from "../redux/actions/itinerariesActions"
import NoItineraries from '../components/NoItineraries'
import Itinerary from '../components/Itinerary'
import Preloader from "./Preloader";
import userActions from '../redux/actions/userActions'

const City =(props)=> {
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState({})
  const id = props.match.params.id
  const {getItineraries, cities} = props
  
  useEffect(()=> {
    var ciudad = cities.filter(city => city._id === id)
    setCity(ciudad[0])
    fetchData()
    window.scrollTo(0, 0)
    cities.length=== 0 && props.history.push('/cities')
  }, [cities, id, props.history])

  // Funcion async donde incluyo la funcion que en su action tiene un pedido ajax, por ende tiene una promesa y esto me permite utilizar el estado de loadgin.

  const fetchData = async () => {
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
    return (
    <>
    <CityHeader city={city} props={props}/>
    <h3 style={{textAlign: "center"}}>Available Itineraries for {city.cityName}</h3>
    <div style={{display: 'flex', justifyContent: 'center'}}>{comparator()}</div>
    {props.allItineraries.map(itinerary => {
      return <Itinerary key={itinerary._id} itinerary={itinerary} id={id}/>
    })}
    <GoBack/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesR.cities,
    allItineraries: state.itinerariesR.itineraries,
    userLogged: state.userR.userLogged
  }
}
const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,
  logOut: userActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(City)