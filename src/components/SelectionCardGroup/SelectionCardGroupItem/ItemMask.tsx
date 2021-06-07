import React, { CSSProperties } from 'react';
import Expand_Vector from 'assets/old/Expand_Vector.png';

export type CardGroupItem = {
  title: string;
  description: string;
  image: string;
  style?: CSSProperties;
};

export const ItemMask: React.FC<CardGroupItem> = (props) => {
  return (
    <div className={'px-4 bg-white shadow-lg rounded-xl bg-gray-200'}>
      <div className={'font-sans py-0 text-lg text-gray-800 font-semibold'}>
        {props.title}
      </div>
      <div className={'font-sans py-0 text-lg text-gray-800 font-semibold'}>
        {props.description}
      </div>
      <div className={'object-left flex'}>
        <img className="object-contain" src={Expand_Vector} />
        <h1 className="font-sans text-left font-small font-semibold">Expand</h1>
        <img className="object-contain" src={props.image} />
      </div>
    </div>
  );
};

export default ItemMask;
