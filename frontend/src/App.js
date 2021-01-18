// Componente principal que llama a todos los componentes necesarios para renderizar la app web.

import './styles.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Cities from './pages/Cities'

function App() {
return (
  <>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cities" component={Cities}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  </>
)
}

export default App;
