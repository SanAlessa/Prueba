import axios from 'axios'
import toast from 'react-hot-toast'

const userActions = {
  createUser: (newUser)=> {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/signup', newUser)
        if(!response.data.success){
          return response.data 
        }
        dispatch({type: 'LOG_USER', payload: response.data})
        console.log(response)
      }catch(err){
        toast.error('Oops something went wrong, try again later!')
      }

    }
  },
  logIn: (user) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/login', user)
        if(!response.data.success){
          return response.data
        }
        dispatch({type: 'LOG_USER', payload: response.data})
      }catch(err){
        toast.error('Oops something went wrong, try again later!')
      }
    }
  },

  logInFromLS: (token) => {
    return async (dispatch, getState) => {
      try{
        const response = await axios.post('http://localhost:4000/api/login/ls', {token}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'LOG_USER', payload: {response: {...response.data.response}}})
        console.log(response)
      }catch(err){
        // Evalua el estado del error 401 (unauthorized)
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