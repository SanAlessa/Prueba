import axios from 'axios'


const commentActions = {
  addComment: (comment, token, id) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.put('http://localhost:4000/api/comments', {comment, token, id} , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'ADD_COMMENT', payload: response.data})
        return true
      }catch(error){
        console.log(error)
      }
    }
  },
  prueba: () => {
    return (dispatch, getState) => {
      dispatch({type: 'RENDER'}) 
    }
  }
}

export default commentActions