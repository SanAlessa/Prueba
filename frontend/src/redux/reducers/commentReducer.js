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
    case 'UPDATE_COMMENT':
      return{
        ...state,
        comment: action.payload
      }
    case 'DELETE_COMMENT':
      return{
        ...state
      }
    default:
    return state
  }
}

export default commentReducer