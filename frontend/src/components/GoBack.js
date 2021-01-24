import {Link} from 'react-router-dom'

const GoBack =()=> {
  return(
    <div className="goBackCities" style={{backgroundImage: 'url("../assets/search.jpg")'}}>
      <Link to="/cities">
        <div className="prueba">
          <h5 className="goBack">Do you want to see more itineraries? GO BACK!</h5>
          <img src="../assets/goback1.png" alt="arrow to left"/>
        </div>
      </Link>
    </div>
  )
}
export default GoBack