import React, {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';
import { ReactComponent as Checkmark } from 'assets/icons/checkmark.svg';
import { PageContext } from 'context';

export type NavGroupItem = {
  value: string;
  route: string;
  completed: boolean;
  active?: boolean;
  style?: CSSProperties;
  handleChange?: (newValue: string) => void;
};

export const SidebarGroupItem: React.FC<NavGroupItem> = (props) => {
  // @ts-ignore
  const { contextState, updateContext } = useContext(PageContext);

  function handleChange(newValue: string) {
    updateContext({
      type: 'updatePageState',
      payload: newValue,
    });
  }
  let statusStyles = props.active
    ? ' text-white bg-blue-600 cursor-default '
    : ' text-gray-300 hover:bg-blue-100 hover:text-blue-600 cursor-pointer ';
  props.completed &&
    (statusStyles += ' text-blue-600 hover:bg-blue-100 cursor-pointer ');

  return (
    <div
      onClick={(e) => {
        // @ts-ignore
        handleChange(props.value);
      }}
      style={props.style}
      className={
        'font-sans font-normal relative flex flex-row items-center justify-between px-4 py-2 bg-white transition duration-200 border-t cursor-pointer' +
        statusStyles
      }
    >
      <div>{props.value}</div>
      {props.completed && (
        <Checkmark className={'fill-current'} height="24" width="24" />
      )}
      {!props.completed && <Checkmark height="24" width="24" />}
    </div>
  );
};

export default SidebarGroupItem;