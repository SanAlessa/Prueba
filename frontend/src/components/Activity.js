
const Activity = ({activity})=>{
  const {image, title} = activity
  return (
    <div className="activity">
      <img src={image} alt=""/>
      <p>{title}</p>
    </div>
  )
}
export default Activity