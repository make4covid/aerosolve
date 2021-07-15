import React, { useCallback, useContext, useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionCardGroup } from '../../../components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from '../../../components/SelectionCard/SelectionCard'
import { physicalHeavy, physicalSitting, physicalStanding, physicalLight } from 'assets/images'
import { SelectAllLabel } from 'components/SelectAllLabel/SelectAllLabel'
import { AppContext } from 'context'
import debounce from 'lodash.debounce'

let options: SelectionOptions[] = [
  {
    title: 'Resting / Sitting',
    description: 'Common in offices, classrooms, and libraries.',
    img: physicalSitting,
    risk: 'Low',
  },
  {
    title: 'Standing / Walking',
    description: 'Common in galleries, museums, and grocery stores.',
    img: physicalStanding,
    risk: 'Low',
  },
  {
    title: 'Light / Moderate Exercise',
    description: 'Common in yoga studios, warehouses, and restaurants.',
    img: physicalLight,
    risk: 'Medium',
  },
  {
    title: 'Heavy Exercise',
    description: 'Common in fitness centers and gymnasiums.',
    img: physicalHeavy,
    risk: 'High',
  },
]

export const PhysicalActivity: React.FC<StepViewProps> = (props) => {
  const [{ userInputs }, dispatch] = useContext(AppContext)
  const [selected, setSelected] = useState(userInputs.physicalActivity)

  const debouncedUpdate = useCallback(
    debounce(
      (selected) => dispatch({ type: 'setPhysicalActivity', payload: { value: selected } }),
      1000
    ),
    []
  )

  const update = (selected: number[]) => {
    // debouncedUpdate(selected)
    dispatch({ type: 'setPhysicalActivity', payload: { value: selected } })
    setSelected(selected)
    props.onComplete()
  }
  return (
    <div className="flex flex-col w-full min-h-full mt-2">
      <SelectAllLabel />
      <SelectionCardGroup
        options={options}
        multi={true}
        cardCol={false}
        columns={2}
        selected={selected}
        setSelected={update}
      />
    </div>
  )
}
