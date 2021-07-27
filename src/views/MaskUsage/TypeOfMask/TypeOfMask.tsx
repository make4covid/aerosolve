import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import { maskCloth, maskCloth2, maskDisposable, maskN95, maskNone } from 'assets/images'
import { SelectAllLabel } from 'components/SelectAllLabel/SelectAllLabel'
import { AppContext } from 'context'
import debounce from 'lodash.debounce'

let options: SelectionOptions[] = [
  {
    title: 'Cloth Masks',
    description: 'Some people are wearing cloth masks.',
    img: maskCloth,
    risk: 'Medium',
  },
  {
    title: 'Double-layered Masks',
    description: 'Some people are wearing double-layered cloth masks or silk masks.',
    img: maskCloth2,
    risk: 'Low',
  },
  {
    title: 'Disposable / Surgical Masks',
    description: 'Some people are wearing disposable or surgical masks.',
    img: maskDisposable,
    risk: 'Low',
  },
  {
    title: 'N95 Respirators',
    description: 'Some people are wearing N95 respirators.',
    img: maskN95,
    risk: 'Low',
  },
]

export const TypeOfMask: React.FC<StepViewProps> = (props) => {
  const [{ userInputs }, dispatch] = useContext(AppContext)
  const [selected, setSelected] = useState(userInputs.maskTypes)

  useEffect(() => props.onComplete(), [])

  const update = (selected: number[]) => {
    setSelected(selected)
    dispatch({ type: 'setMaskTypes', payload: { value: selected } })
    // debouncedUpdate(selected)
    props.onComplete()
  }

  return (
    <div className="flex flex-col w-full min-h-full">
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
