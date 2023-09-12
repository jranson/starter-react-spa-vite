import { useMemo, useState } from "react"
import './ButtonGroup.css'

type ButtonGroupProps = {
  groupName: string
  buttons: ButtonConfig[]
  defaultValue?: string | boolean | number
  label?: string
  onClick: any
  buttonClass?: string
  buttonColor?: string
  buttonSize?: string
}

type ButtonConfig = {
  caption: string
  value: string | boolean | number
}

export function ButtonGroup(props: ButtonGroupProps) {

  const [selection, setSelection] = useState(props.defaultValue)
  const { buttonColor, buttonSize } = props

  const btnColor = useMemo(() => {
    if (!buttonColor) {
        return 'black'
    }
    return buttonColor
  }, [buttonColor])

  const btnSize = useMemo(() => {
    if (!buttonSize) {
        return 'med'
    }
    return buttonSize
  }, [buttonSize])

  const isSelected = ((value: any, defaultValue: any, extra: string = '', trueClass: string, falseClass: string, compareNegative = false) => {
    if ((value === defaultValue) || (compareNegative && (value !== defaultValue))) {
      if (trueClass !== '') {
        if (extra === '') {
          return trueClass
        }
        return trueClass + ' ' + extra
      }
      return extra
    }
    if (falseClass !== '') {
      if (extra === '') {
        return falseClass
      }
      return falseClass + ' ' + extra
    }
    return extra
  })

  const isButtonSelected = ((value: any, defaultValue: any, extra: string = '', compareNegative = false) => {
    const base = `button-basic button-${btnColor} button-${btnSize} px-2`
    return isSelected(value, defaultValue, extra, `${base} px-2`, 
        `${base} button-outline px-2`, compareNegative)
  })

  return (
    <div className="wide centered btn-group btn-group-sm mb-2 px-3 pt-1" role="group" aria-label={props.label}>
      {
        props.buttons.map((button) =>
          <div
            className="btn-group-element"
            key={'div.' + props.groupName + button.value}
          >
            <input
              type="radio"
              className="btn-check"
              name={props.groupName}
              id={props.groupName + button.value}
              autoComplete="off"
              onClick={() => { setSelection(button.value); props.onClick(button.value) }}
            />
            <label
              className={isButtonSelected(button.value, selection, props.buttonClass)}
              htmlFor={props.groupName + button.value}>
              {button.caption}
            </label>
          </div>
        )}
    </div>
  )
}