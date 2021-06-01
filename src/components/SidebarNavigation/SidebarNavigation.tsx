import React, { useContext } from 'react';
import { SidebarGroup } from 'components/SidebarGroup/SidebarGroup';
import { PageContext } from 'context';

export type { NavGroup } from 'components/SidebarGroup/SidebarGroup';

export const SidebarNavigation: React.FC<{}> = (props) => {
  // @ts-ignore
  const { contextState, updateContext } = useContext(PageContext);
  return (
    <div className="w-full">
      {contextState.defaultNavGroups.map((group: any) => (
        <SidebarGroup items={group.items} header={group.header} />
      ))}
    </div>
  );
};
