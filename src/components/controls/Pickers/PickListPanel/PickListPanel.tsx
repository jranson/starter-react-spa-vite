import './PickListPanel.css'

const isSelected = ((value: any, defaultValue: any, extra: string = '', trueClass: string, falseClass: string, compareNegative = false) => {
  if ((value === defaultValue) || (compareNegative && (value !== defaultValue))) {
    if (trueClass !== '') {
      if (extra === '') {
        return trueClass
      }
      return trueClass + ' ' + extra
    }
    return extra
  }
  if (falseClass !== '') {
    if (extra === '') {
      return falseClass
    }
    return falseClass + ' ' + extra
  }
  return extra
})

const isLinkSelected = ((value: any, defaultValue: any, extra: string = '', compareNegative = false) => {
  return isSelected(value, defaultValue, extra, 'picklist-link picklist-link-selected', 'picklist-link', compareNegative)
})

type PickListPanelLinkProps = {
  defaultValue?: string
  value: string
  onClick: any
}

const PickListPanelLink = (props: PickListPanelLinkProps) => {
  return (
    <>
      <span className={isLinkSelected(props.defaultValue, props.value, 'my-1')} onClick={() => props.onClick(props.value)}>{props.value}</span>
    </>
  )
}

type PickListPanelLinksProps = {
  defaultValue?: string
  onClick: any
  values: string[]
}

const PickListPanelLinks = (props: PickListPanelLinksProps) => {
  return (
    <>
      {props.values.map((val) =>
        <PickListPanelLink defaultValue={props.defaultValue} key={val} value={val} onClick={props.onClick} />
      )}
    </>
  )
}

type PickListPanelProps = {
  defaultValue?: string
  values: string[]
  onClick: any
}

export function PickListPanel(props: PickListPanelProps) {

  return (
    <div className="light-panel-box my-2 mx-3">
      <div className="d-flex flex-wrap justify-content-center align-items-center py-2">
        <PickListPanelLinks defaultValue={props.defaultValue} values={props.values} onClick={props.onClick} />
      </div>
    </div>
  )
}