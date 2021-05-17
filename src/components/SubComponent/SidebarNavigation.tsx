import React ,  { Dispatch, SetStateAction } from 'react'
import {SidebarGroup, NavGroup} from 'components/SubComponent/SidebarGroup/SidebarGroup'
export type { NavGroup } from 'components/SubComponent/SidebarGroup/SidebarGroup'

type NavGroups = {
  navGroups: NavGroup[],
  setNavGroups: Dispatch<SetStateAction<NavGroup[]>>
  handleChange?: (newValue: React.SetStateAction<string>) => void
}

export const SidebarNavigation: React.FC<NavGroups> = (props) => {
    return (
    <div>
      { props.navGroups.map((group) => <SidebarGroup  handleChange={props.handleChange} items={group.items} header={group.header}/>) }
    </div>
  )
}