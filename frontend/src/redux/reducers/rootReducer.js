import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'
import userReducer from './userReducer'
import commentReducer from './commentReducer'
import likeReducer from './likeReducer'

const rootReducer = combineReducers({
  citiesR: cityReducer,
  itinerariesR: itineraryReducer,
  userR: userReducer,
  commentR: commentReducer,
  likeR: likeReducer
})

export default rootReducer