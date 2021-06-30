import React, { useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionOptions } from '../../../components/SelectionCard/SelectionCard'
import Kids from '../../../assets/old/KidImage.png'
import { SelectionCardGroup } from '../../../components/SelectionCardGroup/SelectionCardGroup'

let options: SelectionOptions[] = [
  {
    title: 'Whispering',
    description: '',
    img: Kids,
  },
  {
    title: 'Conversation',
    description: '',
    img: Kids,
  },
  {
    title: 'Conference',
    description: '',
    img: Kids,
  },
  {
    title: 'Singing\nSpeaking\nLoud Talking',
    description: '',
    img: Kids,
  },
]

export const VocalActivity: React.FC<StepViewProps> = (props) => {
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
