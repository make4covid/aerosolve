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

  const [nOfOccupant, setNOfOccupant] = useState(Array(30).fill(0));
  const [occupant, setOccupant] = useState(5);

  function plus(value: number) {
    let newNOfOccupant = nOfOccupant;
    newNOfOccupant[value] = 1;
    setOccupant(++value);
    setNOfOccupant(newNOfOccupant);
  }
  function minus(value: number) {
    if (value > 0) {
      let newNOfOccupant = nOfOccupant;
      newNOfOccupant[value] = 0;
      setOccupant(--value);
      setNOfOccupant(newNOfOccupant);
    }
  }

  return (
    <div className="lg:w-64 lg:h-36 border-blue-500 bg-white border-4 rounded-xl lg:ml-16">
        <div className="flex flex-col z-10">
          <div className="flex-1"><br/></div>
          <div className="flex-1">
            <div className="flex flex-row justify-evenly">
                <span
                  className="flex-1 text-3xl cursor-pointer"
                  onClick={(e) => {
                    // @ts-ignore
                    props.minus(props.nOfOccupant);
                  }}
                >
                  <button className="lg:px-6 lg:py-3">
                    <img  className="w-12 h-8"   src={Minus_Sign} />{' '}
                  </button>
                </span>

                <span className="flex-1 text-5xl text-blue-500 text-center font-bold">
                  {props.nOfOccupant}
                </span>
                <span
                  className="flex-1 text-3xl cursor-pointer"
                  onClick={(e) => {
                    // @ts-ignore
                    props.plus(props.nOfOccupant);
                  }}
                >
                  <button className="lg:px-6 lg:py-3">
                    <img className="w-12 h-8" src={Plus_Sign} />
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
};
