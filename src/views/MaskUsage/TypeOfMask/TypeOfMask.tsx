import React, { useCallback, useContext, useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import { maskCloth, maskDisposable, maskN95, maskNone } from 'assets/images'
import clsx from 'clsx'
import { SelectAllLabel } from 'components/SelectAllLabel/SelectAllLabel'
import { AppContext } from 'context'
import debounce from 'lodash.debounce'

let options: SelectionOptions[] = [
  {
    title: 'No Masks',
    description: 'Some (unvaccinated) occupants are not properly wearing masks.',
    img: maskNone,
    risk: 'High',
  },
  {
    title: 'Cloth Masks',
    description: 'Some people are properly wearing a cotton mask.',
    img: maskCloth,
    risk: 'Medium',
  },
  {
    title: 'Disposable / Surgical Masks',
    description: 'Some people are properly wearing a disposable or surgical mask.',
    img: maskDisposable,
    risk: 'Low',
  },
  {
    title: 'N95 Respirators',
    description: 'Some people are properly wearing N95 respirators.',
    img: maskN95,
    risk: 'Low',
  },
]

export const TypeOfMask: React.FC<StepViewProps> = (props) => {
  const [{ userInputs }, dispatch] = useContext(AppContext)
  const [selected, setSelected] = useState(userInputs.maskTypes)

  const debouncedUpdate = useCallback(
    debounce((selected) => dispatch({ type: 'setMaskTypes', payload: { value: selected } }), 1000),
    []
  )

  const update = (selected: number[]) => {
    debouncedUpdate(selected)
    setSelected(selected)
    props.onComplete()
  }

  return (
    <div className="flex flex-col justify-center w-full min-h-full -mt-4">
      <SelectAllLabel />
      <SelectionCardGroup
        options={options}
        multi={true}
        cardCol={false}
        columns={2}
        selected={selected}
        setSelected={update}
        imgFit="contain"
      />
    </div>
  )
}
