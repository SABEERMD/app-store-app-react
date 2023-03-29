// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ' '

  return (
    <div className="tab-container">
      <li className="tabs-list-container">
        <button
          className={`tab-btn ${activeTabClassName}`}
          type="button"
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </li>
      <hr className="horizantal-line" />
    </div>
  )
}

export default TabItem
