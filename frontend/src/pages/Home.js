// Componente HOME que se llama para la pagina principal llamando los componentes que pertenecen a la misma.

import Header from '../components/Header'
import Cta from '../components/Cta'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'

const Home = ()  => {
return (
  <>
    <Hero/>
    <Header/>
    <Cta/>
    <Carousel/>
  </>
)
}

export default Home;
