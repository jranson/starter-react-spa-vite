import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMemo } from "react"
import { item } from "./item"

import './ListBoxItem.css'

type ListBoxItemProps = {
  item: item
  className?: string
}

export function ListBoxItem(props: ListBoxItemProps) {

  const { item, className } = props

  const classes = useMemo(() => {
    let base = 'list-box-item'
    if (className) {
      base = `${base} ${className}`
    }
    if (item.disabled) {
      base = `${base} list-box-item-disabled`
    } else {
      base = `${base} list-box-item-enabled`
    }
    if (item.isActive && !item.disabled) {
      if (item.items == undefined) {
        return`${base} list-box-child-item-active`
      }
      return`${base} list-box-item-active`
    }
    if (item.items == undefined) {
      return`${base} list-box-child-item-inactive`
    }
    return`${base} list-box-item-inactive`
  }, [item, className])

  const childrenClasses = (item: item) => {
    const base = 'list-box-item-children'
    if (item.isActive && item.items && item.items.length > 0) {
      return `${base} list-box-item-children-active`
    }
    return `${base} list-box-item-children-inactive`
  }

  const childrenBoxStyle = (item: item) => {
    if (!item.isActive || item.disabled || !item.items || item.items.length == 0) {
      return {height: '0px'} as React.CSSProperties
    }
    return {height: `calc(var(--list-box-line-height) * ${item.items.length})`} as React.CSSProperties
  }

  return (
  <>
    <div className={classes} onClick={() => { if (!item.disabled) { item.onClick(item.id)}}}>
      <div className="me-2 list-box-item-icon">
        {item.icon && <FontAwesomeIcon icon={item.icon} />}
      </div>
      <span>{item.title}</span>
      {item.isActive && item.items != undefined && item.items.length === 0 && 
        <span className="subtle ms-2">(empty)</span>
      }
    </div>
    <div className={childrenClasses(item)} style={childrenBoxStyle(item)}>
    {item.isActive && !item.disabled &&
        item.items?.map((childItem) => {
          return <ListBoxItem 
                  item={childItem}
                  key={childItem.id}
                  className="list-box-item-child"
                />
        })
      }
    </div>
  </>
  )
}
