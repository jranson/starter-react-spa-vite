import './Header.css'
import { LeftHeader } from './LeftHeader'
import { RightHeader } from './RightHeader'

type HeaderProps = {
  hamburgerToggle: any
}


export function Header(props: HeaderProps) {
  return (
    <header className="app-header">
      <LeftHeader hamburgerToggle={props.hamburgerToggle} />
      <RightHeader />
    </header>
  )
}