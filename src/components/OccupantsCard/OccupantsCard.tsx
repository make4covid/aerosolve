import React, { CSSProperties, useState } from 'react';
import Plus_Sign from 'assets/old/Plus_Sign.png';
import Minus_Sign from 'assets/old/Minus_Sign.png';
export type OccupantsCardProps = {
  header?: string;
  nOfOccupant: number;
  style?: CSSProperties;
  plus?: (value: number) => any;
  minus?: (value: number) => any;
};

export const OccupantsCard: React.FC<OccupantsCardProps> = (props) => {
  return (
    <div className="container w-4/4  h-2/4 border-blue-500 bg-white border-4 rounded-xl relative">
      <div className="grid grid-rows-3 divide-y z-10">
        <div className="row-span-1"></div>
        <div className="flex justify-between row-span-1 align-middle">
          <span
            className="inline-block text-3xl cursor-pointer"
            onClick={(e) => {
              // @ts-ignore
              props.minus(props.nOfOccupant);
            }}
          >
            <button>
              <img src={Minus_Sign} />{' '}
            </button>
          </span>

          <span className="inline-block text-5xl text-blue-500 text-center font-bold">
            {props.nOfOccupant}
          </span>
          <span
            className="inline-block text-3xl cursor-pointer"
            onClick={(e) => {
              // @ts-ignore
              props.plus(props.nOfOccupant);
            }}
          >
            <button>
              <img src={Plus_Sign} />
            </button>
          </span>
        </div>
        <div className="row-span-1 border-gray-300 border-t-5">
          <p className="text-center text-2xl text-gray-500 font-bold">
            occupants
          </p>
        </div>
      </div>
    </div>
  );
};
