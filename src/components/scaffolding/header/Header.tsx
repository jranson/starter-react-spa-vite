import { useState } from 'react'
import './Header.css'
import { LeftHeader } from './LeftHeader'
import { RightHeader } from './RightHeader'
import SettingsMenu from '../../menus/SettingsMenu'

type HeaderProps = {
  hamburgerToggle: any
}

export function Header(props: HeaderProps) {

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => {
    if (isMenuVisible) {
      return
    }
    setIsMenuVisible(true)
  }

  const hideMenu = () => {
    setTimeout(() => { setIsMenuVisible(false) }, 1)
  }

  return (
    <div className="header-container">
      <header className="app-header">
        <LeftHeader hamburgerToggle={props.hamburgerToggle} />
        <RightHeader toggleSettingsMenuFunc={toggleMenu} />
      </header>
      {isMenuVisible && <SettingsMenu
          closer={hideMenu} />}
    </div>
  )
}