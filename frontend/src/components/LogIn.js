import {  useState } from "react"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faKey, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
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
  const [visible, setVisible] = useState(false)

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
      setErrors(res.response)
      return false
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
    if(res && !res.succes){
      toast.error('This google account is not registered')
    }
  }

  return(
    <>
    <div className="hero-image-signup" style={{backgroundImage: "url('https://blacklinesandbillables.com/wp-content/uploads/2016/09/notepad-1280x640.jpeg')"}}>
      <Header/>
    </div>
    <div className="borderPic"></div>
    <div style={{display: 'flex', position:'relative', marginBottom: '10vh', marginTop: '2vh'}}>
      <div className="prueba2">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '3vh', position: 'absolute', top: '35%'}} >
          <h1 style={{color: 'white', marginBottom: '3vh', marginLeft: '1.5vw'}}>Don't have <br/> an account?</h1>
          <Link to="/SignUp"><h2 style={{textAlign: "center", color: 'white', width: '8vw', border: '3px solid white'}}>Sign Up!</h2></Link>
        </div>   
      </div>
      <div className="formContainer logIn" style={{position: 'absolute', backgroundColor: 'white', top: '0', left: '0', right: '0', bottom: '0', marginTop: '-0.2vh'}}>
        <h1>Log In</h1>
        <div className="icon-input">
          <div className="icon"><FontAwesomeIcon className='iconForm' icon={faEnvelope}/></div>
          <div className="form">
            <input type="text" name="email" required onChange={readInput}/>
            <label className="labelInput" htmlFor="email">
              {errors ?
              <p>{errors && errors}</p>
              :
              <span className="contentInput">Email</span>
              }
            </label>
          </div>
        </div>
        <div className="icon-input">
          <div className="icon"><FontAwesomeIcon className='iconForm' icon={faKey}/></div>
          <div className="form">
            <input type={visible ? "text" : "password"} name="password" required onChange={readInput}/>
            <label className="labelInput" htmlFor="password">
              {errors ?
              <p>{errors && errors}</p>
              :
              <span className="contentInput">Password</span>
              }
            </label>
            <FontAwesomeIcon onClick={()=>setVisible(!visible)} icon={visible ? faEyeSlash : faEye} className="eyePw"/>      
          </div>
        </div>
        <button className="createAcc" onClick={()=>validateInfo()}>Log In</button>
        <h4>Or</h4>
        {/* <GoogleLogin className="googleBtnLogIn"
          clientId="556912548524-tkvtubo3ao3tkkmv9vsk7bv7eevcdtbt.apps.googleusercontent.com"
          buttonText="Log In with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
      </div>
    </div>
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