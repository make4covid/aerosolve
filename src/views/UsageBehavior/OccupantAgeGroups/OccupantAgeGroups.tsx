import React, { useState } from 'react'
import * as Images from 'assets/images'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import { StepViewProps } from 'data'
import { CursorClick } from 'assets/svg'
import { useContext } from 'react'
import debounce from 'lodash.debounce'
import { AppContext } from 'context'
import { useCallback } from 'react'
import { SelectAllLabel } from 'components/SelectAllLabel/SelectAllLabel'

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
  const [{ userInputs }, dispatch] = useContext(AppContext)
  const [selected, setSelected] = useState(userInputs.ageGroups)

  const debouncedUpdate = useCallback(
    debounce((selected) => dispatch({ type: 'setAgeGroups', payload: { value: selected } }), 1000),
    []
  )

  const update = (selected: number[]) => {
    debouncedUpdate(selected)
    setSelected(selected)
    props.onComplete()
  }

  return (
    <div className="flex flex-col w-full h-full mt-2">
      <SelectAllLabel />

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
