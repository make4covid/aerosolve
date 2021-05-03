import React from 'react'
import SidebarGroupItem, { SidebarGroupItemProps } from './SidebarGroupItem/SidebarGroupItem'

export interface SidebarGroupProps {
    header: string,
    items: SidebarGroupItemProps[]
}

export const SidebarGroup: React.FC<SidebarGroupProps> = ({ header, items }) => {

    const listItems = items.map((item) =>
        <React.Fragment key={item.value}>
            <SidebarGroupItem value={item.value} status={item.status} action={item.action} />
        </React.Fragment>
    );

    return (
        <div className="sidebarGroup">
            <h1 className="sidebarGroupHeader text-gray-500 flex font-sans font-bold text-sm text-center">
                {header}
            </h1>
            <div className="border border-gray-300 rounded-md overflow-hidden w-52">{listItems}</div>
        </div>
    );
}
export default SidebarGroup

