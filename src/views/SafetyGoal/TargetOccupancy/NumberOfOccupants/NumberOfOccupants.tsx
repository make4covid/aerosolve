import React, { CSSProperties, useState } from 'react';
import {
  OccupantsCard,
  OccupantsCardProps,
} from 'components/OccupantsCard/OccupantsCard';
import head_white from 'assets/old/head_white.png';
import body_white from 'assets/old/body_white.png';
import head_blue from 'assets/old/head_blue.png';
import body_blue from 'assets/old/body_blue.png';

export const NumberOfOccupants: React.FC<OccupantsCardProps> = (props) => {
  const [nOfOccupant, setNOfOccupant] = useState(Array(30).fill(0));
  const [occupant, setOccupant] = useState(0);

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
    <div className="h-full w-full rounded-xl bg-gray-300 relative">
      <div className="grid grid-cols-3">
        <div className="col-span-1 text-gray-700 font-semibold text-lg pl-10">
          <p>Number of Occupants</p>
          {nOfOccupant.map((value, index) => {
            if (value == 0) {
              return (
                <span className="inline-block p-1">
                  <img className="px-1" src={head_white} />
                  <img src={body_white} />
                </span>
              );
            } else {
              return (
                <span className="inline-block p-1">
                  <img className="px-1" src={head_blue} />
                  <img src={body_blue} />
                </span>
              );
            }
          })}
        </div>
        <div className="col-span-1 px-10"></div>

        <div className="col-span-1 pr-10 relative">
          <p className="text-base font-medium">
            Target number of occupants intended for the space to be occupied in
            a single setting.
          </p>
          <div className="z-10 relative">
            <OccupantsCard nOfOccupant={occupant} plus={plus} minus={minus} />
          </div>
        </div>
      </div>
    </div>
  );
};
