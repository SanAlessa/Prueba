// Componente que contiene el link GoBack que se ejecuta en la pagina cites/:id

import {Link} from 'react-router-dom'

const GoBack =()=> {
  return(
    <div className="goBackCities" >
      <img src="../assets/search.jpg" className= 'imgGoBack'style={{width: '50vw', borderRadius: '50px', zIndex: '-1'}} alt=""/>
      <Link to="/cities">
        <div className="divGoBack">
          <h5 className="goBack">Do you want to see more itineraries? GO BACK!</h5>
          <img src="../assets/goback1.png" alt="arrow to left"/>
        </div>
      </Link>
    </div>
  )
}
export default GoBack