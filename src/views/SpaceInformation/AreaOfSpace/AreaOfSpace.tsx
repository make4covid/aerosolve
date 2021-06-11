import React from 'react'

import { LeftPanel } from './LeftPanel/LeftPanel'
import { RightPanel } from './RightPanel/RightPanel'
import { SelectionCard } from './Selection/Selection'
import { StepViewProps } from 'data'

export const AreaOfSpace: React.FC<StepViewProps> = (props) => {
  return (
    <div className="grid h-screen gap-4 divide-gray-400 grid-rows-8">
      <div className="row-span-2"></div>

      <div className="row-span-3 position:relative">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <LeftPanel size={'small apartment'} description={'18 people or less'} />
          </div>
          <div className="col-span-1">
            <RightPanel />
          </div>
        </div>
      </div>
      <div className="row-span-2">
        <SelectionCard squareFeet={50} />
      </div>
      <div className="row-span-1"></div>
    </div>
  )
}
