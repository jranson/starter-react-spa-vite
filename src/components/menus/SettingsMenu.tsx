import { useClickListener } from "../../events/mouse/outsideClick"

import { useContext } from 'react'
import { PrefsContext } from '../../prefs/PrefsContext'
import { CheckMenuItem } from './CheckMenuItem'

import './ContextMenu.css'
import './SettingsMenu.css'

type SettingsMenuProps = {
  closer: any
}

export function SettingsMenu(props: SettingsMenuProps) {

  const prefs = useContext(PrefsContext)
  const { ref } = useClickListener(props.closer);

  const setOSThemeMode = () => {
    if (prefs.setThemeFunc) {
      prefs.setThemeFunc('os')
    }
    if (props.closer) {
      props.closer()
    }
  }

  const setDarkMode = () => {
    if (prefs.setThemeFunc) {
      prefs.setThemeFunc('darkMode')
    }
    if (props.closer) {
      props.closer()
    }
  }

  const setLightMode = () => {
    if (prefs.setThemeFunc) {
      prefs.setThemeFunc('lightMode')
    }
    if (props.closer) {
      props.closer()
    }
  }

  const setHighContrastMode = () => {
    if (prefs.setThemeFunc) {
      prefs.setThemeFunc('highContrastMode')
    }
    if (props.closer) {
      props.closer()
    }
  }

  return (
    <div className="context-menu-mask" style={{ right: '15px' }} ref={ref}>
      <div className="context-menu settings-menu">
        <ul className="mt-2 mb-0">
          <li className="add-border-bottom ps-3">
            <span className="color-subtle">Settings</span>
          </li>
          <CheckMenuItem
            onClick={setOSThemeMode}
            label="Use Operating System Theme"
            isChecked={localStorage.getItem('prefs.colorTheme') === 'os'}
            className="py-2 pad-top"
          />
          <CheckMenuItem
            onClick={setDarkMode}
            label="Use Dark Theme"
            isChecked={localStorage.getItem('prefs.colorTheme') === 'darkMode'}
          />
          <CheckMenuItem
            onClick={setLightMode}
            label="Use Light Theme"
            isChecked={localStorage.getItem('prefs.colorTheme') === 'lightMode'}
          />
          <CheckMenuItem
            onClick={setHighContrastMode}
            label="Use High-Contrast Theme"
            isChecked={localStorage.getItem('prefs.colorTheme') === 'highContrastMode'}
          />
        </ul>
      </div>
    </div>
  )
}

export default SettingsMenu
