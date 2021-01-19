const Foto = ({foto}) => {
  const {src, titulo} = foto
  return (
    <>
      <div key={foto.titulo} className="imagenesCarousel" style={{
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

export default Foto