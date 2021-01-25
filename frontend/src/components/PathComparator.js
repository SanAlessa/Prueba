const PathComparator =()=>{
// COMPONENTE ENCARGADO DE HACER LAS COMPARACIONES CORRESPONDIENTES PARA CADA RUTA HACIENDO UN HEADER DINAMICO AL SCROLEAR
    window.onscroll = function(e){
      if(e.path[0].URL === 'http://localhost:3000/'){
        if(window.scrollY > 700){
          document.querySelector('#header').setAttribute('class', 'header')
          document.querySelector('#imgLogin').setAttribute('src', "../assets/login.png")
          document.querySelector('#logo').style.visibility = "visible"
        }else{
          document.querySelector('#header').setAttribute('class', 'principalHeader')
          document.querySelector('#imgLogin').setAttribute('src', "../assets/login1.png")
          document.querySelector('#logo').style.visibility = "hidden"
        }
      }else if(e.path[0].URL === 'http://localhost:3000/cities'){
        if(window.scrollY > 350){
          document.querySelector('#header').setAttribute('class', 'header')
          document.querySelector('#imgLogin').setAttribute('src', "../assets/login.png")
          document.querySelector('#logo').style.visibility = "visible"
        }else{
          document.querySelector('#header').setAttribute('class', 'principalHeader')
          document.querySelector('#imgLogin').setAttribute('src', "../assets/login1.png")
          document.querySelector('#logo').style.visibility = "hidden"
        }
      }
    }
    return false
  }

export default PathComparator