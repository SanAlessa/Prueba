const initialState = {
  like: {}
}

const likeReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LIKE':
      return {
        ...state,
        like: action.payload
      }
    case 'DISLIKE':
      return {
        ...state,
        like: action.paylaod
      }
    default: 
    return state
  }
}

export default likeReducer