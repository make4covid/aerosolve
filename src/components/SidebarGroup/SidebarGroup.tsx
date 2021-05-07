import React from 'react'
import { SidebarGroupItem, NavGroupItem } from './SidebarGroupItem/SidebarGroupItem'

export type NavGroup = {
  header: string
  items: NavGroupItem[]
}


export const SidebarGroup: React.FC<NavGroup> = (props) => {

    const listItems = props.items.map((item, index) =>
        <React.Fragment key={item.value}>
            <SidebarGroupItem {...item} style={index === 0 ? {borderTop: 0} : {}}/>
        </React.Fragment>
    );

    return (
        <div className="sidebarGroup my-4">
            <h1 className="sidebarGroupHeader text-gray-500 flex font-sans font-bold text-sm text-center mx-2 my-1">
                {props.header}
            </h1>
            <div className="rounded-md overflow-hidden w-52">{listItems}</div>
        </div>
    );
}

