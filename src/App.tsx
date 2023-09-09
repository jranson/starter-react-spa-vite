import { useState } from 'react'
import './App.css'
import { Outlet } from './components/Outlet'
import { Footer } from './components/scaffolding/footer/Footer'
import { Header } from './components/scaffolding/header/Header'
import { Sidebar } from './components/scaffolding/sidebar/Sidebar'

function App() {
  
  const [sidebarMode, setSidebarMode] = useState(
    localStorage.getItem('sidebar.mode') === 'preclosed' ? 'preclosed' : 'open')

  const appDivID = (import.meta.env.VITE_appCompanyName || 'app').toLowerCase()
    .replaceAll(' ', '')

  const toggleSidebar = () => {
    if (sidebarMode !== 'closed' && sidebarMode !== 'preclosed') {
      setSidebarMode('closed')
      localStorage.setItem('sidebar.mode', 'preclosed')
      return
    }
    localStorage.setItem('sidebar.mode', 'reopened')
    setSidebarMode('reopened')
  }

  return (
    <div id="app-container">
      <Header hamburgerToggle={toggleSidebar} />
      <div id={appDivID} className="app-main-section">
        <Sidebar mode={sidebarMode} />
        <main>
          <div className="outlet-container">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
