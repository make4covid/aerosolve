import React from 'react'
// import checkmark from './Checkmark.png'
import {ReactComponent as CheckboxIcon} from './checkbox.svg'

export enum ItemStatus {
    Active,
    Inactive,
    Completed
}

export interface SidebarGroupItemProps {
    status: ItemStatus,
    value: string,
    action: () => void
}

export const SidebarGroupItem: React.FC<SidebarGroupItemProps> = ({ status, value, action }) => {
    let statusStyles = ""

    status == ItemStatus.Active && (statusStyles = "text-white bg-blue-600 cursor-default")
    status == ItemStatus.Inactive && (statusStyles = "text-gray-300 hover:bg-blue-100 hover:text-blue-600 cursor-pointer")
    status == ItemStatus.Completed && (statusStyles = "text-blue-600 hover:bg-blue-100 cursor-pointer")

    return (
        <div className={"font-sans font-normal relative flex flex-row items-center justify-between px-2 py-1 transition duration-200 " + statusStyles}>
            <div className="text-sm">{value}</div>
            {status == ItemStatus.Inactive || <CheckboxIcon className={"fill-current"} height="16" width="16"/>}
        </div>
    )
}

export default SidebarGroupItem
