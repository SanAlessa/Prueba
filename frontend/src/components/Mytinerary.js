// Componente con el contenido del Logo y su estilo.

const Mytinerary = () => {
  return(
    <div className="infoLogo">
      <div style={{display: 'flex', justifyContent: 'center'}} > 
        <img className="imgLogo" src="./assets/logo.png" style={{width: '6vw', minWidth: '60px', marginRight: '2vw'}} alt="logo"/>
        <h1 style={{color: 'orange', fontSize: '10vh', textAlign: 'center'}}>MYtinerary</h1>
      </div>
      <p style={{fontSize: '4vh', textAlign: 'center'}}>Find your perfect trip, designed by insiders who know and love their cities</p>
    </div>
  )
}
export default Mytinerary