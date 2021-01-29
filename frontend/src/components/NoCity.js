const NoCity =()=> {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className="oops" style={{backgroundImage: 'url("../assets/oops.jpg'}}>
        <div className="oopsContent">
          <h3>Looks like the city that you're looking for is not yet...</h3>
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
export default NoCity