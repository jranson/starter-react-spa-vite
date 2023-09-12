import { useMemo } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './ButtonBasic.css'

function Caret() {
  return (
    <>
      <FontAwesomeIcon icon={faCaretDown} className="button-caret" />
    </>
  )
}

type ButtonBasicProps = {
  onClick?: any
  color?: string
  label: string
  labelColor?: string
  outline?: boolean
  className?: string
  icon?: IconDefinition
  disabled?: boolean
  hasMenu?: boolean
}

export function ButtonBasic(props: ButtonBasicProps) {

  const { className, outline, labelColor, color } = props

  const classes = useMemo(() => {
    let baseClasses = 'button-basic'
    if (outline) {
      baseClasses += ` button-outline`
    }
    if (labelColor) {
      baseClasses += ` color-${labelColor}`
    }
    if (className) {
      baseClasses += ` ${className}`
    }
    if (color) {
      return `${baseClasses} button-${color}`
    }
    return `${baseClasses} button-blue`
  }, [color, labelColor, outline])

  return (
    <button onClick={props.onClick} className={classes} disabled={props.disabled}>
        <div style={{alignContent: "center", display: "flex"}}>
          {props.icon && <FontAwesomeIcon icon={props.icon} className="button-icon" />}
          {props.label}
          {props.hasMenu && <Caret />}
        </div>
    </button>
  )
}