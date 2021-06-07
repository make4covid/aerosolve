import React, { Dispatch, MouseEvent, SetStateAction } from 'react';
import { SidebarGroupItem, NavGroupItem } from './SidebarGroupItem';

export type NavGroup = {
  header: string;
  items: NavGroupItem[];
};

export const SidebarGroup: React.FC<NavGroup> = (props) => {
  const listItems = props.items.map((item, index) => (
    <React.Fragment key={item.value}>
      <SidebarGroupItem {...item} style={index === 0 ? { borderTop: 0 } : {}} />
    </React.Fragment>
  ));

  return (
    <div className="my-4 sidebarGroup">
      <h1 className="flex mx-2 my-1 font-sans text-sm font-bold text-center text-gray-500 sidebarGroupHeader">
        {props.header}
      </h1>
      <div className="w-full overflow-hidden rounded-md">{listItems}</div>
    </div>
  );
};
