import { Link } from "react-router-dom";
import ProximoViaje from './ProximoViaje'

// Componente encargado del CTA teniendo como componente la frase antes del carousel.

const Cta = () => {
  return (
    <>
      <div className="divBtnC">
        <div className="btnCities">
          <h3>Looking for itineraries?</h3>
        </div>
          <div className="imgShow">
            <img src="./assets/pointing1.png" style={{width: '20vw'}} alt="ponting"/>
            <Link to="/cities"><button className="showMore">Show Me!</button></Link>
          </div>
      </div>
      <ProximoViaje/>
    </>
  )
}
export default Cta