import { useMemo } from 'react'
import './LabelTag.css'

type LabelTagProps = {
  className?: string
  children?: string
}

export default function LabelTag(props: LabelTagProps) {

  const { className } = props

  const classes = useMemo(() => {
    const base = 'label-tag'
    if (className) {
      return `${base} ${className}`
    }
    return base
  }, [className])
  return (
    <span className={classes}>
      {props.children}
    </span>
  )
}
