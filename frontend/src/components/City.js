// componente que crea cada card de las ciudades.

import { Link } from 'react-router-dom'

const City =({aFiltrar, loading})=>{
// Se verifica que este cargando la data
  if (loading) {
    return <h1>CARGANDO...</h1>
  }
  // Cuando no hay coincidencias con el filtro y la data ya esta cargada muestra una card especial.
  if(aFiltrar.length === 0 && !loading){
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="oops" style={{backgroundImage: 'url("../assets/oops.jpg'}}>
          <div className="oopsContent">
            <h3>Looks like there are no itineraries for the city you're looking for...</h3>
            <h5>Try another one!</h5>
          </div>
        </div>
        <div className="oopsCta">
          <h4>If you want to add an itinerary for this city let us know!!</h4>
          <button className="clickHere">Send your idea!</button>
        </div>  
      </div>
    )
  }
  // Cuando la data esta cargada genera las cards.
   return(
    <div className="cities">
      {aFiltrar.map(({cityPic, cityName, _id})=> {
         return(
          <Link key={_id} className="toItinerary" to={`/cities/${_id}`}>
            <div className="city" style={{backgroundImage: `url("${cityPic}")`}}>
              <h5>{cityName}</h5> 
            </div>
          </Link>
          )
      })}
    </div>
  )
}
export default City