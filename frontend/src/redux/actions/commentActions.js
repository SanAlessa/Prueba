import axios from 'axios'


const commentActions = {
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
        console.log(error)
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
        console.log(error)
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
        console.log(error)
      }
    }
  }
}

export default commentActions