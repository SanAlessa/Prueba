import Header from './Header'
import { useEffect, useState } from "react"

const Itinerary =(props)=> {
  const [itinerary, setItinerary] = useState({})

  useEffect(()=> {
    const id = parseInt(props.match.params.id)
    fetch(`http://localhost:4000/api/cities/${id}`)
    .then(response => response.json())
    .then(data => setItinerary(data.response))
  })

  return (
    <>
    <Header/>
    <h2>{itinerary.titulo}</h2>
    </>
  )
}
export default Itinerary