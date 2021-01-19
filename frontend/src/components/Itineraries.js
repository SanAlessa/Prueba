import Header from './Header'
import { useEffect, useState } from "react"

const Itineraries =(props)=> {
  const [itineraries, setItineraries] = useState({})

  useEffect(()=> {
    const id = parseInt(props.match.params.id)
    fetch(`http://localhost:4000/api/cities/${id}`)
    .then(response => response.json())
    .then(data => setItineraries(data.response))
  })

  return (
    <>
    <Header/>
    <h2>{itineraries.titulo}</h2>
    </>
  )
}
export default Itineraries