import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
// import checkmark from './Checkmark.png'
import { ReactComponent as Checkmark } from 'icons/checkmark.svg';

export type NavGroupItem = {
  value: string;
  route: string;
  completed: boolean;
  active?: boolean;
  style?: CSSProperties;
  handleChange?: (newValue: React.SetStateAction<string>) => void;
};

export const SidebarGroupItem: React.FC<NavGroupItem> = (props) => {
  let statusStyles = props.active
    ? ' text-white bg-blue-600 cursor-default '
    : ' text-gray-300 hover:bg-blue-100 hover:text-blue-600 cursor-pointer ';
  props.completed &&
    (statusStyles += ' text-blue-600 hover:bg-blue-100 cursor-pointer ');

  return (
    <div
      onClick={(e) => {
        // @ts-ignore
        props.handleChange(props.value);
      }}
      style={props.style}
      className={
        'font-sans font-normal relative flex flex-row items-center justify-between px-2 py-1 bg-white transition duration-200 border-t' +
        statusStyles
      }
    >
      <div className="text-sm">{props.value}</div>
      {props.completed && (
        <Checkmark className={'fill-current'} height="16" width="16" />
      )}
      {!props.completed && <Checkmark height="16" width="16" />}
    </div>
  );
};

export default SidebarGroupItem;
