import { useEffect, useState } from "react"
import CityHeader from './CityHeader'
import GoBack from './GoBack';
import Preloader from "./Preloader";

const Itineraries =(props)=> {
  const [itineraries, setItineraries] = useState({})
  
  const id = props.match.params.id

  useEffect(()=> {
    fetch(`http://localhost:4000/api/cities/${id}`)
    .then(response => response.json())
    .then(data => setItineraries(data.response))
    .catch(error => console.log(error))

    window.scrollTo(0, 0)
  }, [id])

  return (
    <>
    <CityHeader itineraries={itineraries}/>
    <div className="divItineraries" style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/06/26/08/43/ribblehead-viaduct-2443085__340.jpg")'}}>
      <h2>We dont have any itineraries yet, be the first!</h2>
    </div>
    <GoBack/>
    {/* <div className="goBackCities" style={{backgroundImage: 'url("../assets/search.jpg")'}}>
      <Link to="/cities">
        <div className="prueba">
          <h5 className="goBack">Do you want to see more itineraries? GO BACK!</h5>
          <img src="../assets/goback1.png" alt="arrow to left"/>
        </div>
      </Link>
    </div> */}
    </>
  )
}
export default Itineraries