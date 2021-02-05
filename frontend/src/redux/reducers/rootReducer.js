import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'
import userReducer from './userReducer'
import commentReducer from './commentReducer'

const rootReducer = combineReducers({
  citiesR: cityReducer,
  itinerariesR: itineraryReducer,
  userR: userReducer,
  commentR: commentReducer
})

export default rootReducer