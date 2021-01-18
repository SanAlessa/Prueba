// Componente con el Logo y contiene el componente que contiene el contenido seguido al Logo

import Mytinerary from './Mytinerary'

const Logo = ()=>{
  return(
    <section>
      <div className="logo">
        <Mytinerary/>
      </div>
    </section>
  )
} 
export default Logo