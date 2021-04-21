import React from 'react'
import SidebarGroupHeader from './SidebarGroupHeader/SidebarGroupHeader'
import SidebarGroupComponent from './SidebarGroupComponent/SidebarGroupComponent'

export interface SidebarGroupProps {
    //TODO: Add props.

  }
  

export const SidebarGroup: React.FC<SidebarGroupProps>= () => {
    return (
        <div className = "sidebarGroup">
            <SidebarGroupHeader header="Sample Occupancy"/>
            <SidebarGroupComponent componentName="Number of Ocupants" completed={true}/>
            <SidebarGroupComponent componentName="Age Groups" completed={false} selected={true}/>
        </div>
    )
}

export default SidebarGroup

