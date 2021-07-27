import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { vocalLoud, vocalNormal, vocalSinging, vocalWhisper } from 'assets/images'
import { SelectAllLabel } from 'components/SelectAllLabel/SelectAllLabel'
import { AppContext } from 'context'
import debounce from 'lodash.debounce'

let options: SelectionOptions[] = [
  {
    title: 'Whispering',
    description: 'Some people are usually speaking very quietly or whispering',
    img: vocalWhisper,
    risk: 'Low',
  },
  {
    title: 'Normal Conversation',
    description: 'Some people are usually engaged in normal indoor conversation.',
    img: vocalNormal,
    risk: 'Low',
  },
  {
    title: 'Loud Conversation',
    description: 'Some people are usually engaged in loud or energetic conversation.',
    img: vocalLoud,
    risk: 'Medium',
  },
  {
    title: 'Singing',
    description: 'At least one person is usually singing.',
    img: vocalSinging,
    risk: 'High',
  },
]

export const VocalActivity: React.FC<StepViewProps> = (props) => {
  const [{ userInputs }, dispatch] = useContext(AppContext)
  const [selected, setSelected] = useState(userInputs.vocalActivity)

  useEffect(() => props.onComplete(), [])

  const debouncedUpdate = useCallback(
    debounce(
      (selected) => dispatch({ type: 'setVocalActivity', payload: { value: selected } }),
      1000
    ),
    []
  )

  const update = (selected: number[]) => {
    // debouncedUpdate(selected)
    setSelected(selected)
    dispatch({ type: 'setVocalActivity', payload: { value: selected } })
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
      />
    </div>
  )
}
