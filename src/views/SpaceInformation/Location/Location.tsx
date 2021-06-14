import React from 'react'
import { InputLocation } from 'components/InputLocation/InputLocation'
import { LeftPanel } from './LeftPanel/LeftPanel'
import { RightPanel } from './RightPanel/RightPanel'
import { StepViewProps } from 'data'

export const Location: React.FC<StepViewProps> = (props) => {
  return (
    <div className="grid h-screen gap-2 divide-gray-400 grid-rows-11 ">
      <div className="row-span-2"></div>

      <div className="relative row-span-1">
        <InputLocation location={'CO'} />
      </div>
      <div className="relative row-span-6">
        <div className="grid w-full h-full grid-cols-2">
          <div className="col-span-1">
            <LeftPanel rate={'Low Risk'} description={'due to high vaccination rate'} />
          </div>
          <div className="col-span-1">
            <RightPanel
              confirmed_case={11021}
              today_case={17}
              death_total_case={420}
              death_today_case={0}
              vaccination_rate={22}
              vaccination_total={1272898}
              relative_air_humidity={47}
            />
          </div>
        </div>
      </div>
      <div className="relative row-span-2"></div>
    </div>
  )
}
