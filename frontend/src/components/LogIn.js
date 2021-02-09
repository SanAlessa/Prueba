import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserTie, faKey} from '@fortawesome/free-solid-svg-icons'
import Header from "./Header"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import GoogleLogin from 'react-google-login';
import toast from "react-hot-toast"



const LogIn = (props) => {
  const [logUser, setLogUser] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState('')

  const readInput =(e)=> {
    const value = e.target.value
    const prop = e.target.name
    setLogUser({
      ...logUser,
      [prop]: value
    })
  }
  const validateInfo = async () => {
    if(logUser.email==='' || logUser.password===''){
      toast.error("All the fields must be filled")
    }
    const res = await props.logUser(logUser)
    if(res && !res.success){
      console.log(res.response)
      setErrors(res.response)
    }
  }
  
  const responseGoogle = async (response)=> {
    if(response.error){
      toast.error('Ups, something went wrong')
    }
    const res = await props.logUser({
      email: response.profileObj.email,
      password: 'Aa'+response.profileObj.googleId,
    })
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
          <FontAwesomeIcon className='iconForm' icon={faUserTie}/>
          <input className="inputForm" type="text" name="email" id="un" placeholder="Enter your email" onChange={readInput}/>
          <p>{errors &&  errors}</p>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon className='iconForm' icon={faKey}/>
          <input className="inputForm" type="password" name="password" id="pw" placeholder="Enter your password" onChange={readInput}/>
          </div>
          <p>{errors &&  errors}</p>
      </form>
      <button className="createAcc" onClick={()=>validateInfo()}>Sign In</button>
    </div>
      <GoogleLogin className="googleBtn"
        clientId="556912548524-tkvtubo3ao3tkkmv9vsk7bv7eevcdtbt.apps.googleusercontent.com"
        buttonText="Log In with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    <Link to="/signup"><h5 style={{textAlign:"center", color: '#1A73E8'}}>You don't have an account? Sign Up!</h5></Link>
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