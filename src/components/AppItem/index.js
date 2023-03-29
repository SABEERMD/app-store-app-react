// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appId, appName, imageUrl} = appsList

  return (
    <li className="app-list-container">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
