// Componente principal que llama a todos los componentes necesarios para renderizar la app web.

import './styles.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Cities from './pages/Cities'
import City from './components/City'
import SignUp from './components/SignUp'

function App() {
return (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cities" component={Cities}/>
        <Route path="/cities/:id" component={City}/>
        <Route path="/signup" component={SignUp}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  </>
)
}

export default App;
