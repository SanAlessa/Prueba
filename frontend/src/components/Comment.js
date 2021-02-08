import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import { useState, useEffect } from "react"


const Comment =(props)=> {
  const {userName, comment} = props.comment
  const [visible, setVisible] = useState(false)
  const [updatedComment, setUpdatedComment] = useState('')
  const [loggedUser, setLoggedUser] = useState('')

  const edit =(e)=> {
    setVisible(!visible)  
    setUpdatedComment(comment)
  }

  const updateComment= async () => {
    await props.updateComment(updatedComment, props.comment._id, props.id, props.loggedUser.response.token)
    props.getItineraries(props.cityId)
    setVisible(!visible)
  }

  const deleteComment =async()=>{
    await props.deleteComment(props.comment._id, props.id, props.loggedUser.response.token)
    props.getItineraries(props.cityId)
  }
  useEffect(() => {
    if(props.loggedUser){
      setLoggedUser(props.loggedUser.response.username)
    }
  }, [])

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
      {loggedUser === props.comment.userName && (
      <>
      <button onClick={edit}> edit </button>
      <button onClick={deleteComment}> delete </button>
      </>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.userR.userLogged
  }
}

const mapDispatchToProps = {
  deleteComment: itinerariesActions.deleteComment,
  getItineraries: itinerariesActions.getItineraries,
  updateComment: itinerariesActions.updateComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)