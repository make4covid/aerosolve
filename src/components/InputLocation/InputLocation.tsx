import React from 'react'
// @ts-ignore
import Location_Pointer from 'assets/old/Location_Pointer.png'
export type InputLocationProps = {
  header?: string
  location: string
}

export const InputLocation: React.FC<InputLocationProps> = (props) => {
  return (
    <div className="grid w-full h-full grid-cols-8 bg-gray-200 rounded-lg">
      <div className="col-span-3">
        <div className="m-4">
          <img className="inline-block px-2" src={Location_Pointer} alt="" />
          <p className="inline-block py-4 text-2xl font-medium">Location</p>
        </div>
      </div>

      <input
        className="col-span-5 gap-2 m-4 bg-white border-2 border-blue-500 rounded-lg w-5/8 w-9/10 h-9/10"
        placeholder="State"
      />
    </div>
  )
}
