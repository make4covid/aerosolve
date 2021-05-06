
import React from 'react';


export interface SvgIconProps {
  /**
   * icon path
   */
  icon: string;
  svgProps?: string
}

export const SvgIcon: React.FC<SvgIconProps> = ({icon, svgProps}) => {
  return (
    <svg className='svg-icon' {...svgProps}
      >
        <use xlinkHref={`/icons.svg#${icon}`} />
    </svg>
  );
};