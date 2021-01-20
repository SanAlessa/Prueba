import Header from './Header'
import { useEffect, useState } from "react"

const Itineraries =(props)=> {
  const [itineraries, setItineraries] = useState({})
  
  const id = props.match.params.id
  console.log(id)
  
  useEffect(()=> {
    fetch(`http://localhost:4000/api/cities/${id}`)
    .then(response => response.json())
    .then(data => setItineraries(data.response))
  }, [id])

  return (
    <>
    <Header/>
    <div className="divItineraries">
      <h2>{itineraries.cityName}</h2>
      <div className="notItineraries" style={{backgroundImage: 'url("../assets/banner.jpg")'}}>
        <h2>We dont have any itineraries yet, be the first!</h2>
      </div>
    </div>
    </>
  )
}
export default Itineraries