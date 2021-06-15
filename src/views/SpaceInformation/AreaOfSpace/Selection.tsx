import React, { CSSProperties } from 'react'
import { SelectionSlider } from 'components/SelectionSlider/SelectionSlider'

export type SelectionCardProps = {
  header?: string
  squareFeet: number
  style?: CSSProperties
}

export const SelectionCard: React.FC<SelectionCardProps> = (props) => {
  return (
    <div className="w-full h-full bg-gray-300 rounded-xl">
      <p className="text-3xl font-bold">Selection</p>
        {/*<SelectionSlider value={20} />*/}
    </div>
  )
}