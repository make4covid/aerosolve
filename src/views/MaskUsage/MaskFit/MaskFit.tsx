import React from 'react'
import { StepViewProps } from 'data'

export const MaskFit: React.FC<StepViewProps> = (props) => {
  return (
    <div className="grid h-screen grid-rows-6 gap-4 divide-gray-400">
      <div className="row-span-1"></div>
      <div className="row-span-4"></div>
      <div className="row-span-1"></div>
    </div>
  )
}
