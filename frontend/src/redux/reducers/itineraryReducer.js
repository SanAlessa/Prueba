const initialState = {
  itineraries: [],
}

const itineraryReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_ITINERARIES':
      return {
        ...state,
        itineraries: action.payload
      }
    case 'LIKE':
      return {
        ...state,
        likes: action.payload
      }
    case 'DISLIKE':
      return {
        ...state,
        likes: action.paylaod
      }
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
    default:
    return state
  }
}

export default itineraryReducer