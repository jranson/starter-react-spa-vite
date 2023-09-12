import { ReactElement, useMemo } from 'react'
import './BasicPanel.css'

type BasicPanelProps = {
  title?: string
  className?: string
  children?: ReactElement[] | ReactElement
}

export default function BasicPanel(props: BasicPanelProps) {

  const { className } = props

  const classes = useMemo(() => {
    const base = 'basic-panel'
    if (className) {
      return `${base} ${className}`
    }
    return base
  }, [className])
  return (
    <div className={classes}>
      {props.title && 
        <div className="title">
          <h4>{props.title}</h4>
          <hr className="mt-0 pt-0" />
        </div>}
      {props.children}
    </div>
  )
}
