import React from 'react'

import {SidebarGroup, NavGroup} from 'components/SidebarGroup/SidebarGroup'

export type { NavGroup } from 'components/SidebarGroup/SidebarGroup'

type NavGroups = {
  navGroups: NavGroup[]
}

export const SidebarNavigation: React.FC<NavGroups> = (props) => {
  return (
    <div>
      { props.navGroups.map((group) => <SidebarGroup items={group.items} header={group.header}/>) }
    </div>
  )
}