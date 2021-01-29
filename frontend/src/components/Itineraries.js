import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import './FonAwesomIcons'
import { useState } from "react";

const heartLookup: IconLookup = { prefix: 'far', iconName: 'heart' }
const heartIconDefinition: IconDefinition = findIconDefinition(heartLookup)


const Itineraries = ({itinerary}) => {
  const [visible, setVisible] = useState(false)

  const { title, userPic, userName, hours, likes, price, hashtag } = itinerary
  return (
  <div className="itinerary">
    <h3>{title}</h3>
    <div className="itineraryContent">
      <div className="userImg" style={{backgroundImage: `url(${userPic})`}}></div>
      <h5>{userName}</h5>
    </div>
    <div className="itineraryInfo">
      <p >Likes: {likes ===0 
      ? <FontAwesomeIcon  style={{color:  'rgba(202, 0, 0)'}} icon={heartIconDefinition}/> 
      : <FontAwesomeIcon  style={{color: 'rgba(202, 0, 0)'}} icon={faHeart}/> } {likes}</p>
      <p style={{marginLeft: '1vw'}}>Duration: {hours} hours</p>
      <p style={{marginLeft: '1vw'}}>Price:{Array(price).fill(<FontAwesomeIcon style={{marginLeft: '10px', color: 'green'}} icon={faMoneyBillAlt} />)}</p>
    </div>
    {hashtag.map(hasthag => { return <p key={hasthag}>{hasthag}</p>})}
    <button onClick={()=> setVisible(!visible)} style={{width: '10vw', height: '3vh'}}>{!visible ? 'View All' : 'View Less'}</button>
    {visible && (
      <h1>Funciona!</h1>
    )}
  </div>
  )
}

export default Itineraries