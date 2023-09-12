import './TextInput.css'

type TextInputProps = {
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
  id?: string
}

export default function TextInput(props: TextInputProps) {

  const autoComplete = props.autoComplete ? "ON" : "OFF"
  const autoCorrect = props.autoCorrect ? "ON" : "OFF"
  const autoCapitalize = props.autoCapitalize ? props.autoCapitalize : "OFF"

  const className = "input-control " + props.className

  return (
      <input type="text" className={className}
        id={props.id} placeholder={props.placeholder}
        aria-label={props.description}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        disabled={props.disabled}
        defaultValue={props.defaultValue}
      />
  )
}
