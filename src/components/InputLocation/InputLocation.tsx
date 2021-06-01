import React from 'react';
// @ts-ignore
import Location_Pointer from 'assets/old/Location_Pointer.png';
export type InputLocationProps = {
  header?: string;
  location: string;
};

export const InputLocation: React.FC<InputLocationProps> = (props) => {
  return (
    <div className="h-full w-full grid grid-cols-8 bg-gray-200 rounded-lg">
      <div className="col-span-3">
        <div className="m-4">
          <img className="inline-block px-2" src={Location_Pointer} />
          <p className="inline-block font-medium text-2xl py-4">Location</p>
        </div>
      </div>

      <input
        className="col-span-5 w-5/8 m-4 w-9/10 h-9/10 bg-white border-2 border-blue-500 rounded-lg gap-2"
        placeholder="State"
      />
    </div>
  );
};
