const initialState = {
  comment: null
}

const commentReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_COMMENT':
      return {
        ...state,
        comment: action.payload
      }
    case 'RENDER':
      return{
        ...state,
        comment: null
      }
    default:
    return state
  }
}

export default commentReducer