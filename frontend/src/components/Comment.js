import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { connect } from "react-redux"
import commentActions from "../redux/actions/commentActions"
import itinerariesActions from "../redux/actions/itinerariesActions"
import { useState } from "react"


const Comment =(props)=> {
  const {userName, comment} = props.comments
  const [visible, setVisible] = useState(false)
  const [updatedComment, setUpdatedComment] = useState('')
  
  const edit =(e)=> {
    setVisible(!visible)  
    setUpdatedComment(comment)
  }

  const updateComment= async () => {
    await props.updateComment(updatedComment, props.comments._id, props.id, localStorage.getItem('token'))
    props.getItineraries(props.cityId)
    setVisible(!visible)
  }

  const deleteComment =async()=>{
    await props.deleteComment(props.comments._id, props.id, localStorage.getItem('token'))
    props.getItineraries(props.cityId)
  }

  return (
    <div className="comment">
      <div className="commentContent">
        <h5>{userName}:</h5>
        {visible ?
        <>
        <input type="text" name="inputComment" onChange={(e)=>setUpdatedComment(e.target.value)} value={updatedComment}/>
        <button onClick={updateComment}> send </button>
        </>
        : <>
      <p>{comment}</p>
      <p className="like"><FontAwesomeIcon icon={faThumbsUp}/></p>
      </>
      }
      </div>
      <button onClick={edit}> edit </button>
      <button onClick={deleteComment}> delete </button>
    </div>

  )
}

const mapDispatchToProps = {
  deleteComment: commentActions.deleteComment,
  getItineraries: itinerariesActions.getItineraries,
  updateComment: commentActions.updateComment
}

export default connect(null, mapDispatchToProps)(Comment)