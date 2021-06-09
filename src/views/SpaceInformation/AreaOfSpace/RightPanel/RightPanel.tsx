import React, { CSSProperties } from 'react';
import Area from 'assets/old/Group232.png';

export type RightPanelProps = {
  header?: string;
};

export const RightPanel: React.FC<RightPanelProps> = (props) => {
  return (
      <div className="w-full h-full bg-gray-500">
        <img src={Area} />
      </div>
  )
};
