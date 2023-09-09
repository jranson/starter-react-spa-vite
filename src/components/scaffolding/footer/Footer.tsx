import './Footer.css'

export function Footer() {
  return (
    <header className="app-footer">
    © {new Date().getFullYear()} {import.meta.env.VITE_appCompanyName} &nbsp; • &nbsp; v{import.meta.env.VITE_appVersion}
    </header>
  )
}