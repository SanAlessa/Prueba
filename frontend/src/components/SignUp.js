import { useEffect, useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faUserTie, faKey, faImage, faGlobeAmericas, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import Header from "./Header"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import toast from "react-hot-toast"

const SignUp = (props) => {
  const [countries, setCountries] = useState([])
  const [newUser, setNewUser] = useState({
    firstname: '', lastname: '', email: '', username: '', password: '', image: '', country: ''
  })
  const [errors, setErrors] = useState({})
  const [visible, setVisible] = useState(false)
  const errorsInput = {
    firstname: null, lastname: null, email: null, username: null, password: null, image: null, country: null
  }

  const readInput =(e)=> {
    const value = e.target.value
    const prop = e.target.name
    setNewUser({
      ...newUser,
      [prop]: value,
    })
  }

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all/')
    .then(response => setCountries(response.data))
  },[])

  const validateInfo = async () => {
    if(newUser.firstname === '' || newUser.lastname === '' || newUser.email === '' 
    || newUser.username === '' || newUser.password === '' 
    || newUser.image === '' || newUser.country === ''){
      toast.error("All the fields must be filled")
    }
    const response = await props.createUser(newUser)
    if(response && !response.success){
      response.errors.map(error=> {
        errorsInput[error.context.label]=error.message
        return false
      })
      setErrors(errorsInput)
    }
  }
  
  const responseGoogle =async (response)=> {
    if(response.error){
      toast.error('Ups, something went wrong')
    }else{
      const res = await props.createUser({
        username: response.profileObj.givenName+' '+response.profileObj.familyName,
        email: response.profileObj.email,
        firstname: response.profileObj.givenName,
        lastname: response.profileObj.familyName,
        image: response.profileObj.imageUrl,
        password: 'Aa'+response.profileObj.googleId,
        country: 'Argentina',
      })
      if(res && !res.success){
        toast.error('This google account is already registered, please Log In')
        return false
      }
    }
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
          <FontAwesomeIcon className='iconForm' icon={faUser}/>
          <input className="inputForm" type="text" name="firstname" id="fn" placeholder="Enter your first name" onChange={readInput}/>
          <p>{errors.firstname && errors.firstname}</p>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon className='iconForm' icon={faUser}/>
          <input className="inputForm" type="text" name="lastname" id="ln" placeholder="Enter your last name" onChange={readInput}/>
          <p>{errors.lastname && errors.lastname}</p>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon className='iconForm' icon={faEnvelope}/>
          <input className="inputForm" type="text" name="email" id="em" placeholder="Enter your email" onChange={readInput}/>
          <p>{errors.email && errors.email}</p>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon className='iconForm' icon={faUserTie}/>
          <input className="inputForm" type="text" name="username" id="un" placeholder="Enter your Username" onChange={readInput}/>
          <p>{errors.username && errors.username}</p>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon className='iconForm' icon={faKey}/>
          <input className="inputForm" type={visible ? "text" : "password"} name="password" id="pw" placeholder="Enter your password" onChange={readInput}/>
          <FontAwesomeIcon onClick={()=>setVisible(!visible)} icon={visible ? faEyeSlash : faEye} className="eyePw"/>
          <p>{errors.password && errors.password}</p>
          </div>
        <div className="inputIcon">
          <FontAwesomeIcon className='iconForm' icon={faImage}/>
          <input className="inputForm" type="text" name="image" id="img" placeholder="Enter an url img" onChange={readInput}/>
          <p>{errors.image && errors.image}</p>
          </div>
        <div className="inputIcon">
        <FontAwesomeIcon className='iconForm' icon={faGlobeAmericas}/>
          <select style={{textAlignLast: 'center'}} className="inputForm" name="country" id="country" onChange={readInput}>
            <option value="choose" >Choose your country</option>
            {countries.map(country => <option key={country.name} value={country.name}>{country.name}</option>)}
          </select>
          <p>{errors.country && 'You have to choose your country'}</p>
        </div>
      </form>
      <button className="createAcc" onClick={()=>validateInfo()}>Create Account</button>
    </div>
    <GoogleLogin className="googleBtn"
        clientId="556912548524-tkvtubo3ao3tkkmv9vsk7bv7eevcdtbt.apps.googleusercontent.com"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    <Link to="/login"><h5 style={{textAlign: "center", color: '#1A73E8'}}>You already have an account? Log In!</h5></Link>
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