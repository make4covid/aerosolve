import React from 'react';
import tw from 'twin.macro';

import clsx from 'clsx';
import { title } from 'process';

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
  className?: string;
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
      className={clsx(
        'rounded-md w-full p-4 cursor-pointer transition duration-300',
        selected && 'bg-blue-500 shadow-inner',
        !selected && 'bg-gray-100 hover:shadow-lg'
      )}
      {...props}
    >
      <div
        className={clsx(
          'font-bold text-lg transition duration-300 leading-snug whitespace-pre-wrap',
          selected && 'text-white',
          !selected && 'text-gray-700'
        )}
      >
        {props.title}
      </div>
      <div
        className={clsx(
          'font-semibold transition duration-300 leading-snug',
          selected && 'text-white',
          !selected && 'text-blue-500'
        )}
      >
        {props.description}
      </div>
    </div>
  );
};
