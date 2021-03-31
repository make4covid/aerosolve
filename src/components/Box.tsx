import React from 'react';

export interface BoxProps {
  /**
   * Is this item selected?
   */
  selected?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * UI Box for selectable blocks containing information and images
 */
export const Box: React.FC<BoxProps> = ({
  selected = false,
  ...props
}) => {
  return (
    <div
      className={"rounded-md w-full h-64 p-5 cursor-pointer transition duration-300 " + ( selected ?  
        "bg-blue-500 shadow-lg" : 
        "bg-gray-100 hover:shadow-lg")}
      {...props}
    >
      {/* TODO: Add child component injection */}
    </div>
  );
};
