import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

type RightHeaderProps = {
  toggleSettingsMenuFunc?: any
}

export function RightHeader(props: RightHeaderProps) {

  const { toggleSettingsMenuFunc } = props

  return (
    <div className="right-header">
      {props.toggleSettingsMenuFunc && <FontAwesomeIcon id="settingsIcon" onClick={toggleSettingsMenuFunc}  icon={faGear} className="action-icon"/> }
    </div>
  )
}
