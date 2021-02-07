// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import {
//   IconLookup,
//   IconDefinition,
//   findIconDefinition
// } from '@fortawesome/fontawesome-svg-core'
// import './FonAwesomIcons'



// const heartLookup: IconLookup = { prefix: 'far', iconName: 'heart' }
// const heartIconDefinition: IconDefinition = findIconDefinition(heartLookup)

// const likeFunction =async()=> {
//   setLike(!like)
//   !like ? await props.like(_id, localStorage.getItem('token')) : await props.dislike(_id, localStorage.getItem('token'))
//   props.getItineraries(props.id)
// }


// const Like =()=> {
//   return(
//   <>
//         <button style={{marginRight: '1vw'}} onClick={likeFunction}>{like ? 'Dislike' : 'Like'}</button>
//       <p className="likes">Likes: {likes.length ===0 
//       ? <FontAwesomeIcon style={{color:  'rgba(202, 0, 0)'}} icon={heartIconDefinition}/> 
//       : <FontAwesomeIcon style={{color: 'rgba(202, 0, 0)'}} icon={faHeart}/> } {likes.length}</p>
//   </>
//   )
// }
// export default Like