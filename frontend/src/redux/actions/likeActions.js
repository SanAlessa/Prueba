import axios from 'axios'

const likeActions = {
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
        console.log(error)
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
        console.log(error)
      }
    }
  }
}

export default likeActions