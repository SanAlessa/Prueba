const initialState = {
  userLogged: null
}


const userReducer =(state = initialState, action) => {
  switch(action.type){
    case 'LOG_USER':
      localStorage.setItem('token', action.payload.response.token)
      localStorage.setItem('name', action.payload.response.name)
      localStorage.setItem('image', action.payload.response.pic)
      return {
        ...state,
        userLogged: action.payload
      }
    case 'LOG_OUT':
      localStorage.clear()
      return {
        ...state,
        userLogged: null
      }
    default:
      return state    
  }
}

export default userReducer