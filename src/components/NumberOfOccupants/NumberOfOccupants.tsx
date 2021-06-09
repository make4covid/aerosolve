import React, { CSSProperties, useState } from 'react';
import {
  OccupantsCardProps,
} from 'components/OccupantsCard/OccupantsCard';
import head_white from 'assets/old/head_white.png';
import body_white from 'assets/old/body_white.png';
import head_blue from 'assets/old/head_blue.png';
import body_blue from 'assets/old/body_blue.png';


export type NumberOfOccupantsProps = {
  header?: string;
  nOfOccupant: number;
  style?: CSSProperties;
  lineBreak?: number
};


export const NumberOfOccupants: React.FC<NumberOfOccupantsProps> = ({
      lineBreak = 5,
      ...props
            }
) => {
  const [nOfOccupant, setNOfOccupant] = useState(Array(30).fill(0));
  /*
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
  */

  return (
    <div className="h-full w-full rounded-xl bg-gray-300 relative">
        <div className="text-gray-700 font-semibold text-lg">
          {nOfOccupant.map((value, index) => {

            if(index % lineBreak == 0){
              return (
                  <br/>
              )
            }
            if (value == 0) {
              return (
                <span className="inline-block lg:p-2">
                  <img className="px-1" src={head_white} />
                  <img src={body_white} />
                </span>

              );
            } else {
              return (
                <span className="inline-block lg:p-2">
                  <img className="px-1" src={head_blue} />
                  <img src={body_blue} />
                </span>
              );
            }

          })}
        </div>
    </div>

  );
};
