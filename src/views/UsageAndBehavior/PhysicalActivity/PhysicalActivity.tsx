import React from 'react'
import { PageFooter } from 'components/PageFooter/PageFooter'
import { StepViewProps } from 'data'

export const PhysicalActivity: React.FC<StepViewProps> = (props) => {
  return (
    <div className="grid h-screen grid-rows-6 gap-4 divide-gray-400">
      <div className="row-span-1"></div>

      <div className="row-span-4"></div>

      <div className="row-span-1">
        <PageFooter />
      </div>
    </div>
  )
}
