import axios from 'axios'
import toast from 'react-hot-toast'


const itinerariesActions = {
  getItineraries: (id) => {
    return async (dispatch, getState) => {
      try {
        const response = await fetch('http://localhost:4000/api/itineraries/'+id)
        const data = await response.json()
        dispatch({type: 'GET_ITINERARIES', payload: data.response})
      }catch(error){
        console.log(error)
      }
    }
  },

  addComment: (comment, token, id) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/comments', {comment, token, id} , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response)
        dispatch({type: 'ADD_COMMENT', payload: response.data})
        return true
      }catch(error){
        toast.error('You have to be logged to send a comment')
      }
    }
  },

  updateComment: (comment, idComment, idItinerary, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.put('http://localhost:4000/api/comments/update', {comment, idComment, idItinerary, token}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response)
        dispatch({type: 'UPDATE_COMMENT', action: response.data})
      }
      catch(error){
        toast.error('Oops something went wrong, try again later!')
      }
    }
  },

  deleteComment: (idComment, idItinerary, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.put('http://localhost:4000/api/comments', {idComment, idItinerary, token}, {
          headers: {
            Authorization: 'Bearer '+ token
          }
        })
        console.log(response)
        dispatch({type: 'DELETE_COMMENT', payload: response.data})
      }
      catch(error){
        toast.error('Oops something went wrong, try again later!')
      }
    }
  },

  like: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/likes', {token, id}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response)
        dispatch({type: 'LIKE', payload: response.data})
      }catch(error){
        toast.error('Oops something went wrong, try again later!')
      }
    }
  },

  dislike: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/dislike', {token, id}, {
          headers: {
            Authorization: 'Bearer ' +token
          }
        })
        console.log(response)
        dispatch({type: 'DISLIKE', payload: response.data})
      }catch(error){
        toast.error('Oops something went wrong, try again later!')
      }
    }
  }
}

export default itinerariesActions