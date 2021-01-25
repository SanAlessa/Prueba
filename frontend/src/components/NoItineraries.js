const NoItineraries =()=> {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className="oops" style={{backgroundImage: 'url("../assets/oops.jpg'}}>
        <div className="oopsContent">
          <h3>Looks like there are no itineraries for the city you're looking for...</h3>
          <h5>Try another one!</h5>
        </div>
      </div>
      <div className="oopsCta">
        <h4>If you want to add an itinerary for this city let us know!!</h4>
        <button className="clickHere">Send your idea!</button>
      </div>  
    </div>
  )
}
export default NoItineraries