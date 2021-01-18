// Componente con el Logo y contiene el componente que contiene el contenido seguido al Logo

import Mytinerary from './Mytinerary'

const Logo = ()=>{
  return(
    <section>
      <div className="logo">
        <img className="imgLogo" src="./assets/logo.png" style={{width: '8vw', minWidth: '60px'}} alt="logo"/>
        <Mytinerary/>
      </div>
    </section>
  )
} 
export default Logo