import { useEffect, useState } from "react"
import axios from "axios"

const SignUp = () => {

  const [countries, setCountries] = useState([])

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all/')
    .then(response => setCountries(response.data))
  },[])
  console.log(countries.name)
  return(
    <div className="signUpForm">
      <input type="text" name="fn" id="fn" placeholder="Enter your first name"/>
      <input type="text" name="ln" id="ln" placeholder="Enter your last name"/>
      <input type="text" name="em" id="em" placeholder="Enter your email"/>
      <input type="text" name="un" id="un" placeholder="Enter your Username"/>
      <input type="text" name="pw" id="pw" placeholder="Enter your password"/>
      <input type="text" name="img" id="img" placeholder="Enter un url img"/>
      <select name="country" id="country">
        <option value="choose">Choose your country</option>
        {countries.map(country => <option value={country.name}>{country.name}</option>)}

      </select>
    </div>
  )
}

export default SignUp