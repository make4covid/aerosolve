import React from 'react'
import checkmark from './Checkmark.png'

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

    {/*TODO: Need to figure out a way to round only the top and bottom components */ }

    if (status === ItemStatus.Completed) {
        return (
            <div className=" rounded-t-md border relative h-8 w-56 ">
                <h1 className=" text-blue-600 text-sm  font-sans font-normal absolute  left-0 w-23">{value}
                </h1>
                <img src={checkmark} className="self-center absolute p-2 right-0 w-23" />

            </div>
        )
    }

    else if (status === ItemStatus.Active) {
        return (
            <div className="w-56 h-8 rounded-b-md border bg-blue-500 flex">
                <h1 className=" text-white text-sm  font-sans font-normal">{value}
                </h1>
            </div>

        )
    }

    else {//Default
        return (
            <div className="w-56 h-8 rounded-md border flex">
                <h1 className=" text-gray-500 bg-white text-sm  font-sans font-medium divide-y divide-gray-500">{value}
                </h1>
            </div>
        )
    }
}

export default SidebarGroupItem
