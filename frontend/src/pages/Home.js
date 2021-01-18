// Componente HOME que se llama para la pagina principal llamando los componentes que pertenecen a la misma.

import Logo from '../components/Logo'
import Cta from '../components/Cta'
import Carousel from '../components/Carousel'

const Home = ()  => {
return (
  <>
    <Logo/>
    <Cta/>
    <Carousel/>
  </>
)
}

export default Home;
