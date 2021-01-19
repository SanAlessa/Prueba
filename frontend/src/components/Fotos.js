// Componente el cual recibe las props proviniente de Carousel y realiza el map correspondiente y da estilos a las imagenes para cada slide.
import Foto from './Foto';


const Fotos = ({fotos}) => {
  return (
    <div className='carousel'>
      {fotos.map((foto)=>{
        return (
          <Foto key={foto.titulo} foto={foto}/>
        )
      })}
    </div>
  )
}
export default Fotos