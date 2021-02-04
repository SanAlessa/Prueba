const initialState = {
  userLogged: null
}


const userReducer =(state = initialState, action) => {
  switch(action.type){
    case 'LOG_USER':
      return {
        ...state,
        userLogged: action.payload
      }
    case 'LOG_OUT':
      return {
        ...state,
        userLogged: null
      }
    default:
      return state    
  }
}

export default userReducer