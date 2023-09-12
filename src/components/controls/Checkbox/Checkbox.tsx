import { useMemo } from "react"
import './Checkbox.css'

type CheckboxProps = {
  label?: string
  onClick?: any
  value?: any
  defaultChecked?: boolean
  disabled?: boolean
  className?: string
  id?: string | undefined
}

// the Checkbox is a simulated Checkbox element with additional capabilities
// e.g., nested sub-menus

export default function Checkbox(props: CheckboxProps) {
  const { className, id, disabled } = props

  const checkboxId = useMemo(() => {
    if (id) {
      return id
    }
    return Math.random().toString()
  }, [id])

  const classes = useMemo(() => {
    const base = 'input-control input-control-checkbox'
    if (className) {
      return `${base} ${className}`
    }
    return base
  }, [className])

  const labelClasses = useMemo(() => {
    const base = 'input-control-label input-control-checkbox-label'
    if (disabled) {
      return `${base} input-control-checkbox-label-disabled`
    }
    return base
  }, [disabled])

  return (
    <div className="flex-middle input-control-checkbox-container">
      <input 
        type="checkbox"
        className={classes}
        disabled={props.disabled}
        id={checkboxId}
        value={props.value}
        defaultChecked={props.defaultChecked}
        onClick={props.onClick}
      />
      {props.label && <label htmlFor={checkboxId} className={labelClasses}>{props.label}</label>}
    </div>
  )
}
