const initialState = {
    cities:[],
    searchCities:[],
}

const cityReducer =(state = initialState, action)=> {
  switch(action.type){
    case 'GET_CITIES':
      return {
        ...state,
        cities: action.payload,
        searchCities: action.payload
      }

    case 'SEARCH_CITIES':
      return {
        ...state,
        searchCities: state.cities.filter(ciudad => ciudad.cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0) 
      }

    default:
      return state
  }
}

export default cityReducer