import axios from 'axios'


const userActions = {
  createUser: (newUser)=> {
    return async (dispatch, getState) => {
      const response = await axios.post('http://localhost:4000/api/signup', newUser)

      if(!response.data.success){
        return response.data
      }
      dispatch({type: 'LOG_USER', payload: response.data})
    }
  },
  logIn: (user) => {
    return async (dispatch, getState) => {
      const response = await axios.post('http://localhost:4000/api/login', user)

      if(!response.data.success && response){

        return response.data
      }
      console.log(response)
      dispatch({type: 'LOG_USER', payload: response.data})
      
    }
  },
  logOut: () => {
    return (dispatch, getState) => {
      dispatch({type: 'LOG_OUT'}) 
    }
  },
  logByStorage: () => {
    return (dispatch, getState) => {
      dispatch({type: 'LOG_USER'})
    }
  }

}
export default userActions