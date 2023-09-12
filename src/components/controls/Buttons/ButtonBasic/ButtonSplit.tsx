import { useMemo } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './ButtonSplit.css'
import './ButtonBasic.css'

function Caret() {
  return (
    <>
      <FontAwesomeIcon icon={faCaretDown} className="button-caret" />
    </>
  )
}

type ButtonSplitProps = {
  onClick?: any
  onCaretClick?: any
  color?: string
  label: string
  labelColor?: string
  outline?: boolean
  className?: string
  icon?: IconDefinition
  disabled?: boolean
}

export function ButtonSplit(props: ButtonSplitProps) {

  const { outline, labelColor, color } = props

  const classes = useMemo(() => {
    let baseClasses = 'button-basic'
    if (outline) {
      baseClasses += ` button-outline`
    }
    if (labelColor) {
      baseClasses += ` color-${labelColor}`
    }
    if (color) {
      return `${baseClasses} button-${color}`
    }
    return `${baseClasses} button-blue`
  }, [color, labelColor, outline])

  // TODO - DISABLED

  return (
    <div style={{alignContent: "center", display: "flex"}} className={props.className}>
      <div onClick={props.onClick} className={classes + ' button-split-left'} style={{alignContent: "center", display: "flex"}}>
        {props.icon && <FontAwesomeIcon icon={props.icon} className="button-icon" />}
        <div>{props.label}</div>
      </div>
      {!props.outline && <div className='button-split-divider' /> }
      <div onClick={props.onCaretClick} className={classes + ' button-split-right'} style={{alignContent: "center", display: "flex"}}>
        <Caret />
      </div>
    </div>
  )
}