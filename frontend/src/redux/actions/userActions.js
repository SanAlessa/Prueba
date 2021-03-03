import axios from 'axios'
import toast from 'react-hot-toast'

const userActions = {
  createUser: (newUser)=> {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('https://alessandro-mytinerary.herokuapp.com/api/signup', newUser)
        if(!response.data.success){
          return response.data 
        }
        dispatch({type: 'LOG_USER', payload: response.data})
        toast.success('Account created successfully!')
      }catch(err){
        toast.error('Oops something went wrong, try again later!')
      }

    }
  },
  
  logIn: (user) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('https://alessandro-mytinerary.herokuapp.com/api/login', user)
        if(!response.data.success){
          return response.data
        }
        dispatch({type: 'LOG_USER', payload: response.data})
        toast.success('Welcome '+response.data.response.name+'!')
      }catch(err){
        toast.error('Oops something went wrong, try again later!')
      }
    }
  },

  logInFromLS: (token) => {

    return async (dispatch, getState) => {
      try{
        const response = await axios.post('https://alessandro-mytinerary.herokuapp.com/api/login/ls', {token}, { // Se agrega el token, porque no se puede poner un .post sin cuerpo (donde esta el token)!
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'LOG_USER', payload: {response: {...response.data.response}}})
      }catch(err){
        // Evalua el estado del error 401 (unauthorized)
        console.log(err)
        if(err.response.status === 401) {
          toast.error("You are not allowed to access this page")
          localStorage.clear()
          return true
        }
      }
    }
  },

  logOut: () => {
    return (dispatch, getState) => {
      dispatch({type: 'LOG_OUT'}) 
    }
  },
}
export default userActions