import { useMemo } from 'react'
import './Sidebar.css'

type SidebarProps = {
  mode: string
}

export function Sidebar(props: SidebarProps) {

  const { mode } = props

  const classes = useMemo(() => {
    const baseClasses = 'sidebar-container'
    if (mode) {
      return `${baseClasses} sidebar-${mode}`
    }
    return baseClasses
  }, [mode])

  return (
    <div className={classes}>
      <div className="sidebar-wrapper">
        <div className="sidebar-panel">
          <div className="sidebar-nav">
            Sidebar Content
          </div>
        </div>
      </div>
    </div>
  )
}
