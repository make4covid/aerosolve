import React, { CSSProperties, useState } from 'react';
import Plus_Sign from 'assets/old/Plus_Sign.png';
import Minus_Sign from 'assets/old/Minus_Sign.png';
export type OccupantsCardProps = {
  header?: string;
  occupant: number;
  style?: CSSProperties;
  /**
   * Action to set selected options
   */
  setOccupant: (selected: number) => void;
};

export const OccupantsCard: React.FC<OccupantsCardProps> = (props) => {


  function plus() {
    props.setOccupant(props.occupant + 1)
  }

  function minus() {
    props.setOccupant(props.occupant - 1)
  }

  return (
      <div className="lg:w-64 lg:h-36 border-blue-500 bg-white border-4 rounded-xl lg:ml-16"
           {...props}
      >
        <div className="flex flex-col z-10">
          <div className="flex-1"><br/></div>
          <div className="flex-1">
            <div className="flex flex-row justify-evenly">
                <span
                    className="flex-1 text-3xl cursor-pointer"
                    onClick={minus}
                >
                  <button className="lg:px-6 lg:py-3">
                    <img className="w-12 h-8" src={Minus_Sign}/>{' '}
                  </button>
                </span>

              <span className="flex-1 text-5xl text-blue-500 text-center font-bold">
                  {props.occupant}
                </span>
              <span
                  className="flex-1 text-3xl cursor-pointer"
                  onClick={
                    plus
                  }
              >
                  <button className="lg:px-6 lg:py-3">
                    <img className="w-12 h-8" src={Plus_Sign}/>
                  </button>
                </span>
            </div>

            <div className="flex-1 border-gray-300 border-t-5">
              <p className="text-center text-2xl text-gray-500 font-bold mt-2 border-t-2">
                occupants
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}