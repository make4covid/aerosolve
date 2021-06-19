import React, { useState } from 'react'
import { StepViewProps } from 'data'
import Mouse from '../../../assets/icons/mouse.png'
import { SelectionCardGroup } from '../../../components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from '../../../components/SelectionCard/SelectionCard'
import Kids from '../../../assets/images/kids.svg'

let options: SelectionOptions[] = [
  {
    title: 'Resting',
    description: '',
    rating: '',
    img: Kids,
  },
  {
    title: 'Standing',
    description: '',
    rating: '',
    img: Kids,
  },
  {
    title: 'Exercise',
    description: '',
    rating: '',
    img: Kids,
  },
  {
    title: 'Heavy Exercise',
    description: '',
    rating: '',
    img: Kids,
  },
]

export const PhysicalActivity: React.FC<StepViewProps> = (props) => {
  const [selected, setSelected] = useState([] as number[])
  return (
    <div className="max-h-screen w-full">
      <div className="py-4">
        <p className="inline-block text-xl text-bold">Please select all that apply. </p>
        <img className="inline-block -py-2" src={Mouse} alt={''} />
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
