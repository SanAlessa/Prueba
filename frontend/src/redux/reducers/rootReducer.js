import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
  citiesR: cityReducer,
  itinerariesR: itineraryReducer,
  userR: userReducer
})

export default rootReducer