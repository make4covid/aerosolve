import React from 'react';
import clsx from 'clsx';
import tw from 'twin.macro';

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
        'rounded-lg w-full p-3 cursor-pointer transition duration-200 flex justify-between',
        selected && 'bg-blue-500 shadow-inner',
        !selected && 'bg-gray-200 hover:shadow-lg',
        column && 'flex-col',
        !column && 'flex-row'
      )}
      {...props}
    >
      <div>
        <div className="flex flex-col justify-between">
          <div
            className={clsx(
              'font-bold text-lg transition duration-200  whitespace-pre-wrap',
              selected && 'text-white',
              !selected && 'text-gray-700'
            )}
          >
            {props.title}
          </div>
          <div
            className={clsx(
              'font-semibold text-sm transition duration-200 ',
              selected && 'text-white',
              !selected && 'text-blue-500'
            )}
          >
            {props.description}
          </div>
        </div>
        <div className="w-6 h-6 mt-5 font-bold text-center text-gray-200 bg-gray-400 rounded-full">
          ?
        </div>
      </div>
      {props.img && (
        <div
          className={clsx(
            'overflow-hidden rounded-lg transition duration-200 shadow-lg',
            selected && 'opacity-60',
            !selected && 'opacity-80',
            !column && 'w-1/2',
            column && 'w-full mt-4 max-h-52'
          )}
        >
          <img
            src={props.img}
            alt=""
            className={clsx('w-full h-full object-cover object-center')}
          />
        </div>
      )}
    </div>
  );
};
