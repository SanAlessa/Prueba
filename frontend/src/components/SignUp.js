import { useEffect, useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faUserTie, faKey, faImage, faGlobeAmericas, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'


const SignUp = () => {

  const [countries, setCountries] = useState([])

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all/')
    .then(response => setCountries(response.data))
  },[])
  console.log(countries.name)
  return(
    <>
    <Header/>
    <div className="formContainer" >
      <form className="signUpForm">
        <div className="inputIcon"><FontAwesomeIcon icon={faUser}/><input className="inputForm" type="text" name="fn" id="fn" placeholder="Enter your first name"/></div>
        <div className="inputIcon"><FontAwesomeIcon icon={faUser}/><input className="inputForm" type="text" name="ln" id="ln" placeholder="Enter your last name"/></div>
        <div className="inputIcon"><FontAwesomeIcon icon={faEnvelope}/><input className="inputForm" type="text" name="em" id="em" placeholder="Enter your email"/></div>
        <div className="inputIcon"><FontAwesomeIcon icon={faUserTie}/><input className="inputForm" type="text" name="un" id="un" placeholder="Enter your Username"/></div>
        <div className="inputIcon"><FontAwesomeIcon icon={faKey}/><input className="inputForm" type="text" name="pw" id="pw" placeholder="Enter your password"/></div>
        <div className="inputIcon"><FontAwesomeIcon icon={faImage}/><input className="inputForm" type="text" name="img" id="img" placeholder="Enter un url img"/></div>
        <div className="inputIcon">
        <FontAwesomeIcon icon={faGlobeAmericas}/>
          <select style={{textAlignLast: 'center'}} className="inputForm" name="country" id="country">
            <option value="choose">Choose your country</option>
            {countries.map(country => <option value={country.name}>{country.name}</option>)}
          </select>
          <FontAwesomeIcon style={{position: 'absolute', right: '1rem', top: '0.9rem', cursor: 'pointer', zIndex: '1'}} icon={faAngleDown}/>
        </div>
      </form>
      <button className="createAcc">Create Account</button>
    </div>
    </>
  )
}

export default SignUp