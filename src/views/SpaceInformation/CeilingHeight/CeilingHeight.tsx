import React from 'react'
import { SelectionSlider } from 'components/SelectionSlider/SelectionSlider'
import { StepViewProps } from 'data'

export const CeilingHeight: React.FC<StepViewProps> = (props) => {
  return (
    <div className="grid h-screen gap-4 divide-gray-400 grid-rows-11">
      <div className="row-span-2"></div>
      <div className="row-span-5">
        <div>
          Room Ceiling Height Large room with tall ceilings have more air circulating, so it takes
          longer for exhaled aerosols to reach a dangerous concentration
        </div>
      </div>
      <div className="row-span-3">
          {/*<SelectionSliderHeight value={10} />*/}
      </div>
      <div className="row-span-1"></div>
    </div>
  )
}
