import { useEffect, useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faUserTie, faKey, faImage, faGlobeAmericas, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Header from "./Header"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login';

const SignUp = (props) => {
  const [countries, setCountries] = useState([])
  const [newUser, setNewUser] = useState({})
  const [errors, setErrors] = useState([])
  

  const readInput =(e)=> {
    const value = e.target.value
    const prop = e.target.name
    setNewUser({
      ...newUser,
      [prop]: value
    })
  }

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all/')
    .then(response => setCountries(response.data))
  },[])
  console.log(props)

  const validateInfo = async () => {
    const response = await props.createUser(newUser)
    if(response && !response.success){
      setErrors(response.errors)
    }else {
      alert('Usuario Creado!')

    }
  }

  const responseGoogle =async (response)=> {
    // if(response.error){
    //   alert('Ups, something went wrong')
    // }
    const res = await props.createUser({
      username: response.profileObj.givenName,
      email: response.profileObj.email,
      firstname: response.profileObj.givenName,
      lastname: response.profileObj.familyName,
      image: response.profileObj.imageUrl,
      password: 'As12',
      country: 'Argentina'
    })
    // if(response && !response.success){
    //   setErrors(response.errors)
    // }
    alert('Usuario Creado!')
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
          <FontAwesomeIcon icon={faUser}/>
          <input className="inputForm" type="text" name="firstname" id="fn" placeholder="Enter your first name" onChange={readInput}/>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon icon={faUser}/>
          <input className="inputForm" type="text" name="lastname" id="ln" placeholder="Enter your last name" onChange={readInput}/>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon icon={faEnvelope}/>
          <input className="inputForm" type="text" name="email" id="em" placeholder="Enter your email" onChange={readInput}/>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon icon={faUserTie}/>
          <input className="inputForm" type="text" name="username" id="un" placeholder="Enter your Username" onChange={readInput}/>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon icon={faKey}/>
          <input className="inputForm" type="password" name="password" id="pw" placeholder="Enter your password" onChange={readInput}/>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon icon={faImage}/>
          <input className="inputForm" type="text" name="image" id="img" placeholder="Enter an url img" onChange={readInput}/>
          </div>
        <div className="inputIcon">
        <FontAwesomeIcon icon={faGlobeAmericas}/>
          <select style={{textAlignLast: 'center'}} className="inputForm" name="country" id="country" onChange={readInput}>
            <option value="choose" disabled selected>Choose your country</option>
            {countries.map(country => <option value={country.name}>{country.name}</option>)}
          </select>
          <FontAwesomeIcon style={{position: 'absolute', right: '1rem', top: '0.9rem', cursor: 'pointer', zIndex: '1'}} icon={faAngleDown}/>
        </div>
      </form>
      <button className="createAcc" onClick={()=>validateInfo()}>Create Account</button>
      <GoogleLogin className="googleBtn"
        clientId="556912548524-tkvtubo3ao3tkkmv9vsk7bv7eevcdtbt.apps.googleusercontent.com"
        buttonText="Create Account with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
    {errors.map(error => <h2>{error}</h2>)}
    <Link to="/login"><h5>You already have an account? Log In!</h5></Link>
    </>
  )
}

const mapStateToProps = state => {
  return {
    userLogged: state.userR.userLogged
  }
}

const mapDispatchToProps = {
  createUser: userActions.createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)