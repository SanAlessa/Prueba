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
    <div style={{display: 'flex', position:'relative', marginBottom: '10vh', marginTop: '2vh'}}>
      <div className="prueba">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: '16vh', position: 'absolute', right: '7vw', top: '35%'}} >
          <h1 style={{color: 'white', marginBottom: '3vh'}}>Have an account?</h1>
          <Link to="/login"><h2 style={{textAlign: "center", color: 'white', width: '6vw', border: '3px solid white', marginRight: '2.5vw'}}>Log In!</h2></Link>
        </div>   
      </div>
      <div className="formContainer" style={{position: 'absolute', backgroundColor: 'white', top: '0', left: '0', right: '0', bottom: '0', marginTop: '-0.2vh'}}>
        <h1>Sign Up</h1>
        <div className="icon-input">
          <div className="icon"><FontAwesomeIcon className='iconForm' icon={faUser}/></div>
          <div className="form">
            <input type="text" name="firstname" required autoComplete="off" onChange={readInput}/>
            <label className="labelInput" htmlFor="firstname">
              {errors.firstname ?
              <p>{errors.firstname && errors.firstname}</p>
              :
              <span className="contentInput">Firstname</span>
            }
            </label>
          </div>
        </div>
        <div className="icon-input">
          <div className="icon"><FontAwesomeIcon className='iconForm' icon={faUser}/></div>
          <div className="form">
            <input type="text" name="lastname" required autoComplete="off" onChange={readInput}/>
              <label className="labelInput" htmlFor="lastname">
                {errors.lastname ?
                <p>{errors.lastname && errors.lastname}</p>          
                :
                <span className="contentInput">Lastname</span>
              }
              </label>
            </div>
        </div>
        <div className="icon-input">
          <div className="icon"><FontAwesomeIcon className='iconForm' icon={faEnvelope}/></div>
          <div className="form">
            <input type="text" name="email" required autoComplete="off" onChange={readInput}/>
            <label className="labelInput" htmlFor="email">
              {errors.email ?
              <p>{errors.email && errors.email}</p>
              :
              <span className="contentInput">Email</span>
              }
            </label>
          </div>
        </div>
        <div className="icon-input">
          <div className="icon"><FontAwesomeIcon className='iconForm' icon={faUserTie}/></div>
          <div className="form">
            <input type="text" name="username" required autoComplete="off" onChange={readInput}/>
            <label className="labelInput" htmlFor="username">
              {errors.username ?
              <p>{errors.username && errors.username}</p>
              :
              <span className="contentInput">Username</span>
              }
            </label>
          </div>
        </div>
        <div className="icon-input">
          <div className="icon"><FontAwesomeIcon className='iconForm' icon={faKey}/></div>
          <div className="form">
            <input type={visible ? "text" : "password"} name="password" required autoComplete="off" onChange={readInput}/>
            <label className="labelInput" htmlFor="password">
              {errors.password ?
              <p>{errors.password && errors.password}</p>
              :
              <span className="contentInput">Password</span>
              }
            </label>
            <FontAwesomeIcon onClick={()=>setVisible(!visible)} icon={visible ? faEyeSlash : faEye} className="eyePw"/>      
          </div>
        </div>
        <div className="icon-input">
          <div className="icon"><FontAwesomeIcon className='iconForm' icon={faImage}/></div>
          <div className="form">
            <input type="text" name="image" required autoComplete="off" onChange={readInput}/>
            <label className="labelInput" htmlFor="image">
              {errors.image ?
              <p>{errors.image && errors.image}</p>
              :
              <span className="contentInput">Image</span>
              }
            </label>
          </div>
        </div>
        <div className="icon-input">
          <div style={{color: '#1A73E8'}}><FontAwesomeIcon className='iconForm' icon={faGlobeAmericas}/></div>
          <div className="form">
            <select style={{textAlignLast: 'center'}} className="select" name="country" id="country" onChange={readInput}>
              <option value="choose" >Choose your country</option>
            {countries.map(country => <option key={country.name} value={country.name}>{country.name}</option>)}
            </select>
            <p className="pCountry">{errors.country && 'Please choose your country'}</p>
          </div>
        </div>
        <button className="createAcc" onClick={()=>validateInfo()}>Create Account</button>
        <h4>Or</h4>
        <GoogleLogin className="googleBtn"
                clientId="556912548524-tkvtubo3ao3tkkmv9vsk7bv7eevcdtbt.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />     
      </div>
    </div>


    
    {/* <GoogleLogin className="googleBtn"
        clientId="556912548524-tkvtubo3ao3tkkmv9vsk7bv7eevcdtbt.apps.googleusercontent.com"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    <Link to="/login"><h5 style={{textAlign: "center", color: '#1A73E8'}}>You already have an account? Log In!</h5></Link> */}
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