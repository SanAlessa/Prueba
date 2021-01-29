// componente que crea cada card de las ciudades.

import { Link } from 'react-router-dom'

const EachCity =({ciudad})=>{
  const {cityPic, cityDescription, _id, cityName} = ciudad
  return(
    <Link key={_id} className="toItinerary" to={`/cities/${_id}`}>
      <div className="city" style={{backgroundImage: `url("${cityPic}")`}}>
        <div className="nameDescription">
          <h5>{cityName}</h5>
          <p>{cityDescription}</p>
        </div>
      </div>
    </Link>
  )
}
export default EachCity