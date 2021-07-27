import React, { useContext, useEffect, useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { AppContext } from 'context'
import { CursorClick } from 'assets/svg'

let options: SelectionOptions[] = [
  {
    title: 'Poor Mask Compliance',
    description: 'Very few people in the space properly wear a well-fitted mask.',
    risk: 'High',
  },
  {
    title: 'Moderate Mask Compliance',
    description: 'Some people in the space properly wear well-fitted masks.',
    risk: 'Medium',
  },
  {
    title: 'Good Mask Compliance',
    description: 'Most people in the space properly wear well-fitted masks.',
    risk: 'Medium',
  },
  {
    title: 'Excellent Mask Compliance',
    description: 'Nearly everyone in the space properly wears a well-fitted mask.',
    risk: 'Low',
  },
]

export const MaskFit: React.FC<StepViewProps> = (props) => {
  const [{ userInputs }, dispatch] = useContext(AppContext)
  const [selected, setSelected] = useState(userInputs.maskFit)

  const update = (value: number[]) => {
    setSelected(value)
    dispatch({ type: 'setMaskFit', payload: { value } })
  }

  useEffect(() => props.onComplete(), [])

  return (
    <div className="w-full">
      <div className="relative inline-block mb-4 text-gray-600">
        <p className="inline-block text-sm">
          Please select the option that best describes your space.
        </p>
        <CursorClick className="inline-block w-4 h-4 ml-2 fill-current" />
      </div>
      <SelectionCardGroup
        options={options}
        multi={false}
        cardCol={true}
        columns={2}
        selected={selected}
        setSelected={update}
        imgFit="contain"
      />
    </div>
  )
}
