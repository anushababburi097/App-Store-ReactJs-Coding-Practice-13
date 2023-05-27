// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-item-container">
      <img src={imageUrl} className="image" alt={appName} />
      {/* <h1>{category}</h1> */}
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
