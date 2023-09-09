import { useState } from 'react'
import './App.css'
import { Outlet } from './components/Outlet'
import { Footer } from './components/scaffolding/footer/Footer'
import { Header } from './components/scaffolding/header/Header'
import { Sidebar } from './components/scaffolding/sidebar/Sidebar'

function App() {

  const [sidebarMode, setSidebarMode] = useState('open')

  const appDivID = (import.meta.env.VITE_appCompanyName || 'app').toLowerCase().replaceAll(' ', '')

  const toggleSidebar = () => {
    setSidebarMode((m) => {
      if (m === 'open') {
        return 'closed'
      }
      return 'open'
    })
  }

  return (
    <div id="app-container">
      <Header hamburgerToggle={toggleSidebar} />
      <div id={appDivID} className="app-main-section">
        <Sidebar mode={sidebarMode} />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
