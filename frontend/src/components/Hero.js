// Hero correspondiente a la pagina de HOME

import Logo from './Logo'
import Header from './Header'


const Hero = () => {
  return(
    <>
    <div className="hero-image" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./assets/heroimg.jpg')"}}>
      <Header/>
      <div className="hero-text" style={{color: 'white'}}>
        <Logo/>
      </div>
    </div>
    </>
  )
}
export default Hero