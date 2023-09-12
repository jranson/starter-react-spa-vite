import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

type CheckSectionProps = {
    isChecked: boolean
    checkType?: string
}

function CheckSection(props: CheckSectionProps) {
    if (props.isChecked) {
        return (
            <label className="context-menu-check-area">
                <FontAwesomeIcon icon={faCheck} className="menu-icon highlight" />
            </label>
        )
    }
    return <label className="context-menu-check-area" />
}

type CheckMenuItemProps = {
    onClick: any
    isChecked: boolean
    checkType?: string
    label: string
    notSelectable?: boolean
    className?: string
}

export function CheckMenuItem(props: CheckMenuItemProps) {

    const className = (): string => {
        let s = props.className || ''
        if (!s) {
            s = 'py-2'
        }
        if (!(props.notSelectable)) {
            s = `${s.trim()} selectable`.trim()
        }
        return s
    }

    return (
        <li className={className()} onClick={props.onClick}>
            <CheckSection isChecked={props.isChecked} checkType={props.checkType} />
            {props.label}
        </li>
    )
}