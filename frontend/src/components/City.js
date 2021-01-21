import { Link } from 'react-router-dom'

const City =({cityPic, cityName, _id})=>{
  return(
    <Link key={_id} className="toItinerary" to={`/cities/${_id}`}>
    <div className="city" style={{backgroundImage: `url("${cityPic}")`}}>
      <h5>{cityName}</h5> 
    </div>
  </Link>
  )
}
export default City