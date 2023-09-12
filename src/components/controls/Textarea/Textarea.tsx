import { useMemo } from 'react'
import './Textarea.css'

type TextareaProps = {
  onChange?: any
  onKeyDown?: any
  placeholder?: string
  description?: string
  inputId?: string
  autoComplete?: boolean
  autoCapitalize?: string
  autoCorrect?: boolean
  className?: string
  disabled?: boolean
  defaultValue?: string
}

export default function Textarea (props: TextareaProps) {

  const {inputId, className} = props

  const memoizedInputId = useMemo(() => {
    if (inputId) {
      return inputId
    }
    return 'text-input-row-input'
  }, [inputId])

  const classes = useMemo(() => {
    const base = 'textarea-control'
    if (className) {
      return `${base} ${className}`
    }
    return base
  }, [className])

  return (
    <textarea className={classes}
      id={memoizedInputId} placeholder={props.placeholder}
      aria-label={props.description}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      autoComplete={props.autoComplete ? 'ON' : 'OFF'}
      autoCorrect={props.autoCorrect ? 'ON' : 'OFF'}
      autoCapitalize={props.autoCapitalize ? props.autoCapitalize : 'OFF'}
      disabled={props.disabled}
    >
      {props.defaultValue}
    </textarea>
  )
}
