import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface item {
    id: string
    title: string
    onClick: any
    isActive: boolean
    disabled?: boolean
    icon: IconProp
    items?: item[]
    className?: string
}
