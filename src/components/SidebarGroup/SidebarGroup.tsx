import React from 'react'
import SidebarGroupHeader from './SidebarGroupHeader/SidebarGroupHeader'
import SidebarGroupComponent from './SidebarGroupComponent/SidebarGroupComponent'
import { Header } from '../../stories/Header'

export interface SidebarGroupProps {
    //SidebarGrup header name.
    header: string,

    // Uses two different SidebarGrop components so we need to pass two names.
    component1Name: string,
    component2Name: string,

    //Selected and completed states for both components.
    component1Selected?: boolean,
    component1Completed?: boolean,

    component2Selected?: boolean,
    component2Completed?: boolean
  }
  

export const SidebarGroup: React.FC<SidebarGroupProps>= ({header, component1Name, component2Name, component1Completed, component1Selected, component2Completed, component2Selected}) => {
    return (
        <div className = "sidebarGroup">
            <SidebarGroupHeader header={header}/>
            <SidebarGroupComponent componentName={component1Name} completed={component1Completed} selected={component1Selected}/>
            <SidebarGroupComponent componentName={component2Name} completed={component2Completed} selected={component2Selected}/>
        </div>
    )
}

export default SidebarGroup

