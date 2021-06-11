import React, { CSSProperties } from 'react';
import Area from 'assets/old/Group232.png';

export type RightPanelProps = {
  header?: string;
};

export const RightPanel: React.FC<RightPanelProps> = (props) => {
  return (
        <img src={Area} />
  )
};
