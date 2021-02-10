import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faEdit, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import { useState, useEffect } from "react"
import { faBan } from "@fortawesome/free-solid-svg-icons"


const Comment =(props)=> {
  const {userName, comment} = props.comment
  const [visible, setVisible] = useState(false)
  const [updatedComment, setUpdatedComment] = useState('')
  const [loggedUser, setLoggedUser] = useState('')
  
  useEffect(() => {
    if(props.loggedUser){
      setLoggedUser(props.loggedUser.response.username)
    }
  }, [props.loggedUser])

  const edit =(e)=> {
    setVisible(!visible)  
    setUpdatedComment(comment)
  }

  const updateComment= async () => {
    await props.updateComment(updatedComment, props.comment._id, props.id, props.loggedUser.response.token)
    setVisible(!visible)
  }

  const deleteComment =async()=>{
    await props.deleteComment(props.comment._id, props.id, props.loggedUser.response.token)
  }

  const keyPress=(e)=>{
    e.key==='Enter' && updateComment()
  }

  return (
    <div className="comment">
      <div className="commentContent">
        <h5>{userName}:</h5>
        {visible ?
        <>
        <input type="text" onKeyPress={keyPress} onChange={(e)=>setUpdatedComment(e.target.value)} value={updatedComment} className='updateComment'/>
        <FontAwesomeIcon icon={faPaperPlane} style={{cursor: 'pointer', marginLeft: '0.5rem'}} onClick={updateComment}/>
        <FontAwesomeIcon icon={faBan} style={{cursor: 'pointer', marginLeft: '0.5rem'}} onClick={()=>setVisible(!visible)}/>
        </>
        : <div className="pComment">
        <p>{comment}</p>
        {loggedUser === props.comment.userName && 
        <div>
        <FontAwesomeIcon icon={faEdit} style={{marginRight: '0.4rem', cursor: 'pointer'}} onClick={edit}/>
        <FontAwesomeIcon icon={faTrashAlt} style={{cursor: 'pointer'}} onClick={deleteComment}/>
        </div>
        }
      </div>
      }

      </div>
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