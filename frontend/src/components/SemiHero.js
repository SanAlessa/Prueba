import Header from "./Header";

const SemiHero =()=>{
  return(
    <>
      <div className="hero-image-city" style={{backgroundImage: "url('./assets/plane.jpg')"}}>
        <Header/>
      </div>
      <div className="borderPic"></div>
      <div className="divTitleImg">
        <img src="../assets/avion2.png" alt="avion" className="avionL" style={{width: '25vw'}} />
        <h1 className="hCities">CITIES</h1>
        <img src="../assets/avion.png" alt="avion" className="avionR" style={{width: '25vw'}} />
      </div>
    </>
  )

}
export default SemiHero