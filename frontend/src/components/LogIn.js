import { useState } from "react"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie, faKey} from '@fortawesome/free-solid-svg-icons'
import Header from "./Header"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"


const LogIn = (props) => {
  const [userLogged, setUserLogged] = useState({})
  // const [errors, setErrors] = useState([])
  
  const readInput =(e)=> {
    const value = e.target.value
    const prop = e.target.name
    setUserLogged({
      ...userLogged,
      [prop]: value
    })
  }
  const validateInfo = () => {
    props.logUser(userLogged)
    alert('Bienvenido')
  }
  console.log(props.userLogged)
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