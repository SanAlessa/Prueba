import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'

const rootReducer = combineReducers({
  citiesR: cityReducer,
  itinerariesR: itineraryReducer
})

export default rootReducer