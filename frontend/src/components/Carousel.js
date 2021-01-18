import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Fotos from './Fotos'


// Componente que crea el Carousel con su slide y componentes.

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = [
    [
      {src: './assets/BsAs.jpg', titulo: 'Buenos Aires', id: 'al'},
      {src: './assets/Paris.jpg', titulo: 'Paris', id: 'bk'},
      {src: './assets/Barcelona.jpg', titulo: 'Barcelona', id: 'cj'},
      {src: './assets/madrid.jpg', titulo: 'Madrid', id: 'di'}
    ],
    [
      {src: './assets/Cordoba.jpg', titulo: 'Cordoba', id: 'eh'},
      {src: './assets/NY.jpg', titulo: 'New York', id: 'fg'},
      {src: './assets/tokyo.jpg', titulo: 'Tokyo', id: 'gf'},
      {src: './assets/venecia.jpg', titulo: 'Venice', id: 'he'}
    ],
    [
      {src: './assets/Londres.jpg', titulo: 'London', id: 'id'},
      {src: './assets/Berlin.jpg', titulo: 'Berlin', id: 'jc'},
      {src: './assets/Shangai.jpg', titulo: 'Shangai', id: 'kb'},
      {src: './assets/sydney.jpg', titulo: 'Sidney', id: 'la'}
    ]
  ]

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  // Mapeo de imagenes pasando como prop al componente Item para realizar el 2do Map y determinar los estilos de cada img


  var numero = 0
  const slides = items.map(fotos => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={numero++}
      > 
      <Fotos key={numero+=2} fotos={fotos}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;
