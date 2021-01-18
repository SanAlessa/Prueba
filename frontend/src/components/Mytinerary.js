// Componente con el contenido del Logo y su estilo.

const Mytinerary = () => {
  return(
    <div className="infoLogo">
      <h1 style={{color: 'orange', fontSize: '7vh', textAlign: 'center'}}>MYtinerary</h1>
      <div className="divIconos">
          <i className="fas fa-music"></i>
          <i className="fas fa-plane-departure"></i>
          <i className="fas fa-hotel"></i>
          <i className ="fas fa-umbrella-beach"></i>
        </div>
      <p style={{fontSize: '2vh', textAlign: 'center'}}>Find your perfect trip, designed by insiders who know and love their cities</p>
    </div>
  )
}
export default Mytinerary