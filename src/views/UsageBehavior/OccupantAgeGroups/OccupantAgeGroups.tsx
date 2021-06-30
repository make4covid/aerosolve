import React, { useState } from 'react'
import * as Images from 'assets/images'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import { StepViewProps } from 'data'
import clsx from 'clsx'
import { CursorClick } from 'assets/svg'

let options: SelectionOptions[] = [
  {
    title: 'Children/Teens',
    description: '0 - 16 years',
    risk: 'Low',
    img: Images.kids,
  },
  {
    title: 'Adults',
    description: '17 - 63 years',
    risk: 'Medium',
    img: Images.adults,
  },
  {
    title: 'Seniors',
    description: '64+ years',
    risk: 'High',
    img: Images.seniors,
  },
]

export const OccupantAgeGroups: React.FC<StepViewProps> = (props) => {
  const [selected, setSelected] = useState([] as number[])

  const update = (selected: number[]) => {
    setSelected(selected)
    props.onComplete()
  }

  return (
    <div className="flex flex-col justify-center w-full h-full -mt-6">
      <div className="relative inline-block mb-4 text-gray-600">
        <p className="inline-block text-sm">Please select all that apply.</p>
        <CursorClick className="inline-block w-4 h-4 ml-2 fill-current" />
      </div>

      <SelectionCardGroup
        options={options}
        multi={true}
        cardCol={true}
        columns={3}
        selected={selected}
        setSelected={update}
      />
    </div>
  )
}
