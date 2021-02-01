import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

const Comment =({comments})=> {
  const {userName, comment} = comments
  return (
    <div className="comment">
      <div className="commentContent">
        <h5>{userName}:</h5>
        <p>{comment}</p>
        <p className="like"><FontAwesomeIcon icon={faThumbsUp}/></p>
      </div>
    </div>

  )
}
export default Comment