import { useMemo, useState, useEffect, useCallback, MouseEvent } from "react"
import { useClickListener } from "../../../events/mouse/outsideClick"
import './Select.css'

export interface MenuTreeItem {
  value?: string | number
  label?: string
  isSeparator?: boolean
  childMenu?: MenuTreeItem[]
  disabled?: boolean
}

export interface MenuTreeItemProps extends MenuTreeItem {
  selected?: boolean
  onClick?: any
  closer?: any
  onChange?: any
  defaultValue?: any
}

// the SelectMenuItem is one line item in the pop-up menu for the Select

function SelectMenuItem(props: MenuTreeItemProps) {

  const { disabled, onClick, childMenu, selected } = props

  const classes = useMemo(() => {
    let out = ""
    let sep = ""
    if (disabled) {
      out += sep + "disabled"
      sep = " "
    }
    if (selected) {
      out += sep + "selected"
      sep = " "
    }
    if (!onClick && !childMenu) {
      out += sep + "unselectable"
      sep = " "
    }
    if (childMenu && childMenu.length > 0) {
      out += sep + "expandable"
      sep = " "
    }
    return out
  }, [disabled, onClick, childMenu, selected] )

  if (props.isSeparator) {
    return (
      <hr />
    )
  }

  if (!props.label) {
    return (
      <></>
    )
  }

  if (disabled || (!onClick && !childMenu)) {
    return (
      <>
        <li className={classes}>{props.label}</li>
      </>
    )
  }

  return (
    <>
      <li className={classes} onClick={() => { if (onClick) onClick(props.value)}}>
        {props.label}
        {childMenu && childMenu.length > 0 &&
          <SelectMenu className="submenu" menu={childMenu} closer={props.closer} onChange={props.onChange} defaultValue={props.defaultValue}/>
        }
      </li>
    </>
  )
}

type SelectMenuProps = {
  menu?: MenuTreeItem[]
  closer: any
  onChange?: any
  className?: string
  defaultValue?: any
}

// the SelectMenu is the menu of items that pops when the user clicks the Select element

function SelectMenu(props: SelectMenuProps) {

  const [isClosing, setIsClosing] = useState(false)
  const [isInBlink, setIsInBlink] = useState(false)

  const { closer, className } = props
 
  const blinkClose = useCallback(() => {
    if (closer) {
      closer()
    }
  }, [closer])
  
  useEffect(() => {
    if (isClosing) {
      setTimeout(() => { blinkClose() }, 150)
      setTimeout(() => { setIsInBlink(false) }, 75)
      setIsInBlink(true)
    }
  }, [isClosing, blinkClose])

  const classes = useMemo(() => {

    const base = 'select-flyout-menu'
    const extra = className ? ` ${className}` : ''

    if (isClosing) {
      if (isInBlink) {
        return `${base} closing blinking${extra}`
      }      
      return `${base} closing${extra}`
    }
    return `${base}${extra}`
  }, [isClosing, isInBlink, className])


  const selectItem = (value?: string | number): void => {
    if (value === undefined) {
      return
    }
    if (props.onChange) {
      props.onChange(value)
    }
    if (closer) {
      setIsClosing(true)
    }
  }

  return (
    <div className={classes}>
      <ul>
        {props.menu && props.menu.map((item, i) => {
          return (
            <SelectMenuItem
              key={item.label + i.toString()}
              label={item.label}
              value={item.value}
              childMenu={item.childMenu}
              onClick={selectItem}
              onChange={props.onChange}
              closer={props.closer}
              selected={props.defaultValue && item.value && props.defaultValue === item.value}
              defaultValue={props.defaultValue}
            />
          )
        })}
      </ul>
    </div>
  )
}

type SelectProps = {
  label?: string
  children?: any
  onChange?: any
  defaultValue?: any
  disabled?: boolean
  className?: string
  menuClassName?: string
  menu?: MenuTreeItem[]
  disableTopLevelChecks?: boolean
  placeholder?: string
}

// the Select is a simulated Select element with additional capabilities
// e.g., nested sub-menus

export default function Select(props: SelectProps) {

  const [isMenuOpen, setMenuOpenState] = useState(false)
  const closeMenu = () => {
    setMenuOpenState(false)
  }
  const { ref } = useClickListener(closeMenu);

  const { className, menuClassName, disableTopLevelChecks, menu,
    defaultValue, placeholder, onChange, disabled } = props

  const menuClasses = useMemo(() => {
    if (menuClassName && disableTopLevelChecks) {
      return `${menuClassName} no-check-column`
    }
    if (disableTopLevelChecks) {
      return 'no-check-column'
    }
    if (menuClassName) {
      return menuClassName
    }
    return undefined
  }, [menuClassName, disableTopLevelChecks])

  const classes = useMemo(() => {
    let base = 'input-control select-flyout'
    if (disabled) { base += ' disabled'}
    if (className) {
      return `${base} ${className}`
    }
    return base
  }, [className, disabled])

  const displayValue = useMemo(() => {
    if (defaultValue) {
      if (!menu) {
        return placeholder
      }
      for (const item of menu) {
        if (item.value === defaultValue) {
          return item.label
        }
        if (item.childMenu) {
          for (const subItem of item.childMenu) {
            if (subItem.value === defaultValue) {
              return subItem.label
            }
          }
        }
      }
      return placeholder
    }
    if (placeholder) {
      return placeholder
    }
    return ''
  }, [defaultValue, placeholder, menu])

  const toggleMenu = (e: MouseEvent) => {
    if (e.button !== 0) {
      return
    }
    e.preventDefault()
    const newState = !isMenuOpen
    setMenuOpenState(newState)
  }

  return (
    <div style={{position: 'relative'}} ref={ref}>
      <div className={classes} onMouseDown={toggleMenu} style={{paddingTop: '4px'}}>
        { displayValue }
      </div>
      {isMenuOpen && <SelectMenu onChange={onChange} closer={closeMenu} menu={menu} className={menuClasses} defaultValue={defaultValue}  />}
    </div>
  )
}
