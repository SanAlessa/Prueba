import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBillAlt, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import './FonAwesomIcons'
import { useState } from "react"
import Activity from './Activity'
import Comment from './Comment'

const heartLookup: IconLookup = { prefix: 'far', iconName: 'heart' }
const heartIconDefinition: IconDefinition = findIconDefinition(heartLookup)


const Itinerary = ({itinerary}) => {
  
  const [visible, setVisible] = useState(false)
  const { title, userPic, userName, hours, likes, price, hashtag, activities, comments } = itinerary

  return (
  <div className="itinerary" style={{backgroundImage: 'url("../assets/simpleshiny.svg")'}}>
    <h3 style={{marginTop: '2vh'}}>{title}</h3>
    <div className="itineraryContent">
      <div className="userImg" style={{backgroundImage: `url(${userPic})`}}></div>
      <h5>{userName}</h5>
    </div>
    <div className="itineraryInfo">
      <p className="likes">Likes: {likes ===0 
      ? <FontAwesomeIcon style={{color:  'rgba(202, 0, 0)'}} icon={heartIconDefinition}/> 
      : <FontAwesomeIcon style={{color: 'rgba(202, 0, 0)'}} icon={faHeart}/> } {likes}</p>
      <p style={{marginLeft: '1vw'}}>Duration: {hours} hours</p>
      {/* Metodo Array me permite crear un array de x cantidad de posiciones(indicadas en el param) que no tienen valor pero nos permite mapear por esa cierta cantidad de posiciones */}
      <p style={{marginLeft: '1vw'}}>Price:{[...Array(price)].map((m, i) => {
        return (<FontAwesomeIcon key={i} style={{marginLeft: '10px', color: 'green'}} icon={faMoneyBillAlt} />)})} </p>
    </div>
    {hashtag.map(hasthag => { return <p key={hasthag}>{hasthag}</p>})}
    {visible && (
      <>
      <h4>Activities!</h4> 
      <div className="activities">
        {activities.map(activity => {
          return <Activity key={activity.title} activity={activity}/>
        })}
    </div>
    <h4>Leave a comment!</h4>
    <div className="comments">
      {comments.map(comments => {
        return <Comment key={comments.comment} comments={comments}/>})}
      <div className="inputDiv">
        <FontAwesomeIcon className="enter" icon={faPaperPlane}/>
        <input type="text" name="inputComment" id="inputComment" disabled placeholder="You need to be logged to comment!"/>
      </div>
    </div>
    </>
    )}
    <button className="btnItinerary"onClick={()=> setVisible(!visible)} >{!visible ? 'View All' : 'View Less'}</button>
  </div>
  )
}

export default Itinerary