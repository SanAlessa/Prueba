// Componente principal que llama a todos los componentes necesarios para renderizar la app web.

import './styles.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Cities from './pages/Cities'
import Itinerary from './components/Itinerary'

function App() {
return (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cities/" component={Cities}/>
        <Route path="/cities/:id" component={Itinerary}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  </>
)
}

export default App;
