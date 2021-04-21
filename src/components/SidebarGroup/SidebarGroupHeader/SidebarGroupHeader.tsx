import React from 'react'

export interface SidebarGroupHeaderProps {
    //Group header
    header: string;
}


export const SidebarGroupHeader: React.FC<SidebarGroupHeaderProps> = ({ header }) => {
    return (
        //Will use an h1 for now.
        <h1 className="sidebarGroupHeader text-gray-500 flex font-sans font-bold text-sm text-center">
            {header}
        </h1>
    )
}

export default SidebarGroupHeader