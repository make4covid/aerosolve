import React from 'react'
import { NumberOfOccupants } from './NumberOfOccupants/NumberOfOccupants'
import { HoursCard } from './HoursCard/HoursCard'
import { StepViewProps } from 'data'

export const TargetOccupancy: React.FC<StepViewProps> = (props) => {
  return (
    <div className="grid h-screen gap-2 divide-gray-400 grid-rows-10">
      <div className="row-span-1.5"></div>
      <div className="relative row-span-4 gap-2">
        <NumberOfOccupants nOfOccupant={30} />
      </div>
      <div className="row-span-2.5 relative gap-2">
        <HoursCard hours={30} />
      </div>
      <div className="row-span-1.5 relative gap-2"></div>
    </div>
  )
}
