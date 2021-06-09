import React, { CSSProperties, useState } from 'react';
import { SelectionSlider } from 'components/SelectionSlider/SelectionSlider';

export type HoursCardProps = {
  header?: string;
  hours: number;
  style?: CSSProperties;
};

export const HoursCard: React.FC<HoursCardProps> = (props) => {
  return (
    <div className="w-full h-full rounded-xl bg-gray-300">
      <div className="grid grid-rows-2">
        <div className="row-span-1">
          <div className="grid grid-cols-3">
            <p className=" col-span-1 text-gray-700 font-semibold text-lg pl-10">
              Number of Hours
            </p>
            <div className="col-span-1 "></div>
            <p className="col-span-1">
              Target number of hours intended for the space to be occupied in a
              single setting.
            </p>
          </div>
        </div>
        <div className="row-span-1">
          <SelectionSlider value={20} min={"0"} max={"24"} unit={"hours"} arrayValue={Array.from({length: 13}, (_, i) => i + 2)}/>
        </div>
      </div>
    </div>
  );
};
