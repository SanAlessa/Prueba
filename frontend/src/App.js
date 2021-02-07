// Componente principal que llama a todos los componentes necesarios para renderizar la app web.

import './styles.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Cities from './pages/Cities'
import City from './components/City'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import {connect} from 'react-redux'
import userActions from './redux/actions/userActions'
import { useState } from 'react'
import commentActions from './redux/actions/commentActions'


function App(props) {
  const [reload, setReload] = useState(false)
  
 if(props.userLogged){
   var routes = 
   <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cities" component={Cities}/>
      <Route path="/cities/:id" component={City}/>
      <Route path="/signup" component={SignUp}/>
      <Redirect to="/cities"/>
    </Switch>
   </>
 }else if(localStorage.getItem('token')){
   props.logInFromLS(localStorage.getItem('token'))
   .then(response=> {
    response && setReload(!reload)
   })
  }else{
   routes =
   <>
    <Switch>
      <Route exact path="/cities" component={Cities}/>
      <Route path="/cities/:id" component={City}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={LogIn}/>
      <Redirect to="/"/>
    </Switch>
   </>
 }

return (
  <BrowserRouter>
    <Route exact path="/" component={Home}/>
    {routes}
    <Footer/>
  </BrowserRouter>
)
}

const mapStateToProps = state =>{
  return {
    userLogged: state.userR.userLogged
  }
}

const mapDispatchToProps = {
  logInFromLS: userActions.logInFromLS,
  addComment: commentActions.addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
