import SemiHero from '../components/SemiHero'
import React, {useEffect} from 'react'
import EachCity from '../components/EachCity'
import Preloader from '../components/Preloader'
import NoCity from '../components/NoCity'
import {connect} from 'react-redux'
import cityActions from '../redux/actions/cityActions'


// Componente correspondiente a la pagina Cities que va a llamar a los respectivos componentes.
const Cities = (props) => {
  
  const {getCities} = props
  
  useEffect(()=>{
    getCities()
    window.scrollTo(0,0)
  },[getCities])

  // Funcion encargada de comparar si la data esta cargada o no y retorna el preloader. En caso de no haber ciudades devuelve un componente con una card especifica.
  const comparator = () => {
    if(props.allCities.length === 0){
      return <Preloader/>
    }
    if(props.searchCities.length===0){
      return <NoCity/>
    }
  }

  return(
    <>
    <SemiHero/>
    <section className="cities">
      <input autoComplete="off" className="input" onChange={(e)=>props.citiesFilter(e.target.value)} type="text" name="nombre" 
        placeholder='Search Cities' style={{fontSize: '2.5vh'}} />
      {comparator()}
      <div className="cities">
        {props.searchCities.map((ciudad)=> { return <EachCity key={ciudad._id} ciudad={ciudad} /> })}
      </div>
    </section>
    </>
  )
}

const mapStateToProps = state => {
  return{
    allCities: state.citiesR.cities,
    searchCities: state.citiesR.searchCities
  }
}
const mapDispatchToProps = {
  getCities: cityActions.getCities,
  citiesFilter: cityActions.searchCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)