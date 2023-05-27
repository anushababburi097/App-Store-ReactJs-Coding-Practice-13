// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeAppClassName = isActive ? 'active tap-btn' : 'tap-btn'

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={activeAppClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
