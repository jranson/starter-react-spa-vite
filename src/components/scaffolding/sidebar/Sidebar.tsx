import { useMemo } from 'react'
import './Sidebar.css'

type SidebarProps = {
  mode: string
}

export function Sidebar(props: SidebarProps) {

  const { mode } = props

  const classes = useMemo(() => {
    switch (mode) {
      case 'closed':
        return 'sidebar-container sidebar-closed'
      case 'reopened':
        return 'sidebar-container sidebar-reopened'
    }
    return 'sidebar-container'
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
