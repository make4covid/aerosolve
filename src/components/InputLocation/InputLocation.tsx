import React from 'react'
// @ts-ignore
import {ReactComponent as Location_Pointer} from 'assets/icons/Location_Pointer.svg'
export type InputLocationProps = {
  header?: string
  location: string
}

export const InputLocation: React.FC<InputLocationProps> = (props) => {
  return (
      <div className="h-full w-full flex bg-gray-200 rounded-3xl">
          <div className="flex-1">
              <div className="m-3">
                  <Location_Pointer className="inline-block -mt-2" />
                  <p className="inline-block font-medium text-2xl mx-4 ">Location</p>
              </div>
          </div>

          <input
              className="flex-1 bg-white h-12 w-20 my-2 border-2 border-blue-500 rounded-2xl gap-2"
              placeholder="State"
          />

          <input
              className="flex-1 bg-white h-12 w-28 my-2 border-2 border-blue-500 rounded-2xl mr-4"
              placeholder="County"
          />

      </div>
  )
}
