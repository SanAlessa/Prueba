const initialState = {
  itineraries: [],
  loading: true
}

const itineraryReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_ITINERARIES':
      return {
        ...state,
        itineraries: action.payload,
        loading: action.payload >0 && false
      }
    case 'LIKE':
      return {
        ...state,
        itineraries: state.itineraries.map(itinerary => itinerary._id === action.payload.response._id ? action.payload.response : itinerary)
      }
    case 'COMMENT':
      return {
        ...state,
        itineraries: state.itineraries.map(itinerary => itinerary._id === action.payload.response._id ? action.payload.response : itinerary)
      }
    case 'RESET':
      return {
        ...state,
        itineraries: [],
        loading: true
      }
    default:
    return state
  }
}

export default itineraryReducer