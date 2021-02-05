import { useState } from "react"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie, faKey} from '@fortawesome/free-solid-svg-icons'
import Header from "./Header"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import GoogleLogin from 'react-google-login';


const LogIn = (props) => {
  const [userLogged, setUserLogged] = useState({})
  const [errors, setErrors] = useState({})
  
  const readInput =(e)=> {
    const value = e.target.value
    const prop = e.target.name
    setUserLogged({
      ...userLogged,
      [prop]: value
    })
  }

  const responseGoogle =async (response)=> {
    console.log(response)
    if(response.error){
      alert('Ups, something went wrong')
    }
    const res = await props.logUser({
      username: response.profileObj.givenName,
      password: 'Aa'+response.profileObj.googleId,
    })
    if(res && !response.success){
      setErrors(response.errors)
    }
    alert('Usuario Creado!')
  }

  const validateInfo = () => {
    props.logUser(userLogged)
    alert('Bienvenido')
  }
  return(
    <>
    <div className="hero-image-signup" style={{backgroundImage: "url('https://blacklinesandbillables.com/wp-content/uploads/2016/09/notepad-1280x640.jpeg')"}}>
      <Header/>
    </div>
    <div className="borderPic"></div>
    <div className="formContainer" >
      <form className="signUpForm">
        <div className="inputIcon">
          <FontAwesomeIcon icon={faUserTie}/>
          <input className="inputForm" type="text" name="username" id="un" placeholder="Enter your Username" onChange={readInput}/>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon icon={faKey}/>
          <input className="inputForm" type="password" name="password" id="pw" placeholder="Enter your password" onChange={readInput}/>
          </div>
      </form>
      <button className="createAcc" onClick={()=>validateInfo()}>Sign In</button>
      <GoogleLogin className="googleBtn"
        clientId="556912548524-tkvtubo3ao3tkkmv9vsk7bv7eevcdtbt.apps.googleusercontent.com"
        buttonText="Log In with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
    <Link to="/signup"><h5>You don't have an account? Sign Up!</h5></Link>
    </>
  )
}

const mapStateToProps = state => {
  return {
    userLogged: state.userR.userLogged
  }
}

const mapDispatchToProps = {
  logUser: userActions.logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)