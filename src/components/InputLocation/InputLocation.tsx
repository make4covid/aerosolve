import React from 'react';
// @ts-ignore
import Location_Pointer from 'assets/old/Location_Pointer.png';
export type InputLocationProps = {
  header?: string;
  location: string;
};

export const InputLocation: React.FC<InputLocationProps> = (props) => {
  return (
    <div className="h-full w-full flex bg-gray-400">
      <div className="flex-1">
        <div className="m-3">
          <img className="inline-block px-2 mx-1" src={Location_Pointer} />
          <p className="inline-block font-medium text-2xl py-4 mx-2">Location</p>
        </div>
      </div>

      <input
        className="flex-1 bg-white h-16 w-32 m-4 border-2 border-blue-500 rounded-2xl gap-2"
        placeholder="State"
      />

        <input
            className="flex-1 bg-white h-16 w-32 m-4 border-2 border-blue-500 rounded-2xl gap-2"
            placeholder="County"
        />

    </div>
  )
};
