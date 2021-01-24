// Componente el cual recibe las props proviniente de Carousel, realiza el map correspondiente y da estilos a las imagenes para cada slide.
import Image from './Image';


const Images = ({images}) => {
  return (
    <div className='carousel'>
      {images.map((image)=>{
        return (
          <Image key={image.titulo} image={image}/>
        )
      })}
    </div>
  )
}
export default Images