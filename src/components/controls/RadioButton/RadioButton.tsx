import { useMemo } from "react"
import './RadioButton.css'

type RadioButtonProps = {
  label?: string
  onClick?: any
  defaultChecked?: any
  disabled?: boolean
  className?: string
  id?: string | undefined
  name?: string | undefined
}

export default function RadioButton(props: RadioButtonProps) {
  const { className, id, disabled } = props

  const radioId = useMemo(() => {
    if (id) {
      return id
    }
    return Math.random().toString()
  }, [id])

  const classes = useMemo(() => {
    const base = 'input-control input-control-radio'
    if (className) {
      return `${base} ${className}`
    }
    return `${base}`
  }, [className])

  const labelClasses = useMemo(() => {
    const base = 'input-control-label input-control-checkbox-label'
    if (disabled) {
      return `${base} input-control-checkbox-label-disabled`
    }
    return base
  }, [disabled])

  return (
    <div className="flex-middle input-control-radio-container">
      <input
        type="radio"
        className={classes}
        disabled={props.disabled}
        id={radioId}
        name={props.name}
        defaultChecked={props.defaultChecked}
        onClick={props.onClick}
      />
      {props.label && <label htmlFor={radioId} className={labelClasses}>{props.label}</label>}
    </div>
  )
}
