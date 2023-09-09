import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export function RightHeader() {
  return (
    <div className="left-header">
      <FontAwesomeIcon id="settingsIcon" icon={faGear} className="action-icon"/>
    </div>
  )
}
