import { useMemo } from "react"
import { item } from "./item"
import { ListBoxItem } from "./ListBoxItem"

import './ListBox.css'

type ListBoxProps = {
    items: item[]
    title?: string
    className?: string
    loadingText?: string
    noItemsText?: string // TODO: implement
    errorText?: string // TODO: implement
}

export function ListBox(props: ListBoxProps) {

  const { items, loadingText, noItemsText } = props

  const mLoadingText = useMemo(() => {
    if (loadingText) {
      return loadingText
    }
    return 'Loading ...'
  }, [loadingText])

  const mNoItemsText = useMemo(() => {
    if (noItemsText) {
      return noItemsText
    }
    return 'No items to show'
  }, [noItemsText])

  return (
    <>
      <div className={props.className}>
        {props.title && <div className="mb-2 ms-1 font-reduce-2">{props.title}</div>}
        <div className="list-box-container">
          {items && items.map((item: item) => {
            return (
              <ListBoxItem item={item} key={item.id} />
            )
          })}
          {items === undefined && 
            <div className="subtle ms-1 p-2">{mLoadingText}</div>
          }
          {(items.length === 0) && 
            <div className="subtle ms-1 p-2">{mNoItemsText}</div>
          }
        </div>
      </div>
    </>
  )
}