// Componente el cual recibe las props proviniente de Carousel y realiza el map correspondiente y da estilos a las imagenes para cada slide.

const Fotos = ({fotos}) => {
  return (
    <div className='carousel'>
      {fotos.map(({src, titulo, id})=>{
        return (
          <>
            <div className="imagenesCarousel" style={{
              backgroundImage: `url("${src}")`,
              width: '20vw',
              height: '25vh',
              backgroundSize: 'cover'
            }}>
              <h3 className="fotoTitulo">{titulo}</h3>
            </div>
          </>
        )
      })}
    </div>
  )
}
export default Fotos