// Componente que cse encarga de crear cada card para el carousel.

const Image = ({image}) => {
  const {src, titulo} = image
  return (
    <>
      <div key={image.titulo} className="imagenesCarousel" style={{
        backgroundImage: `url("${src}")`,
        width: '20vw',
        height: '25vh',
        backgroundSize: 'cover'
      }}>
        <h3 className="fotoTitulo">{titulo}</h3>
      </div>
  </>
  )
}

export default Image