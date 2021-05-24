import React, {Dispatch, SetStateAction, useContext, useState} from 'react'
import {SidebarGroup, NavGroup} from 'components/SubComponent/SidebarGroup/SidebarGroup'
import {PageContext} from "../../context";
export type { NavGroup } from 'components/SubComponent/SidebarGroup/SidebarGroup'



export const SidebarNavigation: React.FC<{  }> = (props) => {
    // @ts-ignore
    const { contextState, updateContext } = useContext(PageContext);
    return (
    <div>
      { contextState.defaultNavGroups.map((group:any) => <SidebarGroup   items={group.items} header={group.header}/>) }
    </div>
  )
}