import React, { CSSProperties } from 'react';
import Logo from 'assets/old/Aerosolve_Logo.png';

export const AerosolveLogo: React.FC<{}> = (props) => {
  return (
    <div>
      <img src={Logo} />
    </div>
  );
};
