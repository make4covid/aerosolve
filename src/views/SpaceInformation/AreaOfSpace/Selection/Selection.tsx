import React, { CSSProperties } from 'react'
import { SelectionSliderHeight } from 'components/SelectionSlider/SelectionHeight/SelectionSliderHeight'

export type SelectionCardProps = {
  header?: string
  squareFeet: number
  style?: CSSProperties
}

export const SelectionCard: React.FC<SelectionCardProps> = (props) => {
  return (
    <div className="w-full h-full bg-gray-300 rounded-xl">
      <p className="text-3xl font-bold">Selection</p>
      <SelectionSliderHeight value={20} />
    </div>
  )
}
