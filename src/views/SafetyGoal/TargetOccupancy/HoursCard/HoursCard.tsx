import React, { CSSProperties } from 'react'
import { SelectionSliderHeight } from 'components/SelectionSlider/SelectionHeight/SelectionSliderHeight'

export type HoursCardProps = {
  header?: string
  hours: number
  style?: CSSProperties
}

export const HoursCard: React.FC<HoursCardProps> = (props) => {
  return (
    <div className="w-full h-full bg-gray-300 rounded-xl">
      <div className="grid grid-rows-2">
        <div className="row-span-1">
          <div className="grid grid-cols-3">
            <p className="col-span-1 pl-10 text-lg font-semibold text-gray-700 ">Number of Hours</p>
            <div className="col-span-1 "></div>
            <p className="col-span-1">
              Target number of hours intended for the space to be occupied in a single setting.
            </p>
          </div>
        </div>
        <div className="row-span-1">
          <SelectionSliderHeight value={20} />
        </div>
      </div>
    </div>
  )
}
