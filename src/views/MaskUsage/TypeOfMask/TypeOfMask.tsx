import React, { useState } from 'react'
import { StepViewProps } from 'data'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import Kids from 'assets/old/KidImage.png'
import clsx from 'clsx'

let options: SelectionOptions[] = [
  {
    title: 'No Masks',
    description: '',
    img: Kids,
  },
  {
    title: 'Cloth Masks',
    description: '',
    img: Kids,
  },
  {
    title: 'Surgical Masks',
    description: '',
    img: Kids,
  },
  {
    title: 'N95 Respirators',
    description: '',
    img: Kids,
  },
]

export const TypeOfMask: React.FC<StepViewProps> = (props) => {
  const [mode, setMode] = useState(false) //False means Basic , True means Advanced
  const [selected, setSelected] = useState([] as number[])
  function handleSwitchMode(e: any) {
    e.preventDefault()
    setMode(!mode)
  }
  return (
    <div className="w-full max-h-screen">
      <div className="my-8">
        <div>
          <div className="relative inline-block ">
            <p className="inline-block">Please select all that apply. </p>
            {/* <img className="inline-block" src={Mouse} alt={''} /> */}
          </div>

          <div className="relative inline-block float-right w-64 bg-white border-2 border-gray-400 h-18 rounded-3xl">
            <button
              onClick={handleSwitchMode}
              className={clsx(
                'inline-block w-28 h-10 m-1 relative rounded-3xl float-left  text-white font-bold  rounded cursor-pointer',
                !mode && 'bg-blue-500',
                mode && 'bg-white text-gray-200'
              )}
            >
              Basic
            </button>

            <button
              onClick={handleSwitchMode}
              className={clsx(
                'inline-block w-28 h-10 m-1 relative rounded-3xl float-right text-white font-bold  rounded cursor-pointer',
                !mode && 'bg-white text-gray-200',
                mode && 'bg-blue-500 '
              )}
            >
              Advanced
            </button>
          </div>
        </div>

        <div>
          {!mode && (
            <div>
              <div className="">{/*<GroupAge items={DefaultOccupantAgeGroup} />*/}</div>
            </div>
          )}
        </div>

        <div>
          {mode && (
            <div>
              <div className=""></div>
            </div>
          )}
        </div>
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
