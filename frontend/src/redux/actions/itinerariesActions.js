const itinerariesActions = {
  getItineraries: (id) => {
    return async (dispatch, getState) => {
      try {
        const response = await fetch('http://localhost:4000/api/itineraries/'+id)
        const data = await response.json()
        dispatch({type: 'GET_ITINERARIES', payload: data.response})
        console.log(data)
      }catch(error){
        console.log(error)
      }
    }
  }
}

export default itinerariesActions