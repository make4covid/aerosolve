import React from 'react';
import clsx from 'clsx';
import tw from 'twin.macro';

export interface SelectionOption {
  button_description: string
}
export interface SelectionChoiceProps {
  selected?:boolean
  onClick?: (e:any)=> void
  className?: string;
}

/**
 * UI Box for selectable button containing
 */
export const SelectionChoiceItem: React.FC<SelectionChoiceProps & SelectionOption> = ({
                                                                                        selected = false,
                                                                                        ...props
                                                                                      }) => {
  return (
      <div>
        {props.button_description != "" &&
        <button
            className={clsx(
                'rounded-xl w-full h-full cursor-pointer transition duration-200 focus:outline-none',
                selected && 'bg-blue-500 shadow-inner',
                !selected && 'bg-white hover:shadow-lg',
            )}
            {...props}

        >
          <div className={clsx("justify-center  font-medium sm:text-base md:text-lg lg:text-xl",
              selected && 'text-white',
              !selected && 'text-gray-500',
          )}>
            {props.button_description}
          </div>
        </button>
        }
      </div>
  );
};