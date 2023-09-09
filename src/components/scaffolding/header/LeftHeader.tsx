import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Wordmark } from '../../graphics/wordmark/Wordmark'

type LeftHeaderProps = {
  hamburgerToggle: any
}

export function LeftHeader(props: LeftHeaderProps) {
  return (
    <div className="left-header">
      <FontAwesomeIcon id="settingsIcon" icon={faBars} className="action-icon me-3" onClick={props.hamburgerToggle}/>
      <img alt="Logo Icon" src="./example-logo192.png" className="logo" />
      <Wordmark />
    </div>
  )
}
