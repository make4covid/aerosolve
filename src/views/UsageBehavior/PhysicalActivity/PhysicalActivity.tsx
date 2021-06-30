import React, { useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionCardGroup } from '../../../components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from '../../../components/SelectionCard/SelectionCard'
import Kids from '../../../assets/old/KidImage.png'

let options: SelectionOptions[] = [
  {
    title: 'Resting',
    description: '',
    img: Kids,
  },
  {
    title: 'Standing',
    description: '',
    img: Kids,
  },
  {
    title: 'Exercise',
    description: '',
    img: Kids,
  },
  {
    title: 'Heavy Exercise',
    description: '',
    img: Kids,
  },
]

export const PhysicalActivity: React.FC<StepViewProps> = (props) => {
  const [selected, setSelected] = useState([] as number[])
  return (
    <div className="w-full max-h-screen">
      <div className="py-4">
        <p className="inline-block text-xl text-bold">Please select all that apply. </p>
        {/* <img className="inline-block -py-2" src={Mouse} alt={''} /> */}
      </div>
      <SelectionCardGroup
        options={options}
        multi={true}
        cardCol={false}
        columns={2}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  )
}
