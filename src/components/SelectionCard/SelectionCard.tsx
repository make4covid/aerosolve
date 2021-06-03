import React from 'react';
import tw from 'twin.macro';

// TODO: Check out "Beamwind" for conditional TW styling

export interface SelectionOptions {
  title: string;
  description: string;
  img?: string;
}
export interface SelectionCardProps {
  /**
   * Is this item selected?
   */
  selected?: boolean;
  /**
   * Use a column orientation?
   */
  column?: boolean;
  // /**
  //  * Optional click handler
  //  */
  onClick: () => void;
}

/**
 * UI Box for selectable blocks containing information and images
 */
export const SelectionCard: React.FC<SelectionCardProps & SelectionOptions> = ({
  selected = false,
  column = false,

  ...props
}) => {
  return (
    <div
      className={
        'rounded-md w-full h-64 p-5 cursor-pointer transition duration-300 ' +
        (selected ? 'bg-blue-500 shadow-lg' : 'bg-gray-100 hover:shadow-lg')
      }
      {...props}
      // onClick={
      //   props.onClick();
      // }}
    ></div>
  );
};
