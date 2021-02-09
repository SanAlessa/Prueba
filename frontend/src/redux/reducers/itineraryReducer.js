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
        itineraries: state.itineraries.map(itinerary => itinerary._id === action.payload.response._id ? action.payload.response : itinerary)
      }
    case 'COMMENT':
      return {
        ...state,
        itineraries: state.itineraries.map(itinerary => itinerary._id === action.payload.response._id ? action.payload.response : itinerary)
      }
    default:
    return state
  }
}

export default itineraryReducer