import React, { useState } from 'react'
import { SelectionSlider } from 'components/SelectionSlider/SelectionSlider'
import { GroupAge } from 'components/SelectionCardGroup/GroupAge'
import { CardGroupItem } from 'components/SelectionCardGroup/SelectionCardGroupItem/ItemAge'
import KidImage from 'assets/old/KidImage.png'
import { PageFooter } from 'components/PageFooter/PageFooter'
import { StepViewProps } from 'data'

const DefaultOccupantAgeGroup: CardGroupItem[] = [
  {
    value: 'Living Room',
    age: '0 - 16 Years Old',
    risk: 'Low Risk',
    active: true,
    image: KidImage,
    route: 'test',
    completed: true,
  },
  {
    value: 'Classroom',
    age: '17 - 63 Years Old',
    risk: 'High Risk',
    active: false,
    image: KidImage,
    route: 'test',
    completed: false,
  },
  {
    value: 'Classroom1',
    age: '64+ Years Old',
    risk: 'Medium Risk',
    active: false,
    image: KidImage,
    route: 'test',
    completed: false,
  },
]

export const OccupantAgeGroup: React.FC<StepViewProps> = (props) => {
  const [mode, setMode] = useState(false)

  function handleSwitchMode() {
    setMode(!mode)
  }
  return (
    <div className="grid h-screen grid-rows-6 gap-4 divide-gray-400">
      <div className="row-span-1"></div>

      <div className="row-span-4">
        <div>
          <div className="relative left-0 inline-block">
            <p>Please select all that apply. Mouse button.</p>
          </div>

          <div className="relative inline-block float-right">
            <button
              onClick={handleSwitchMode}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700"
            >
              Basic
            </button>

            <button
              onClick={handleSwitchMode}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700"
            >
              Advanced
            </button>
          </div>
        </div>

        <div>
          {!mode && (
            <div>
              <div className="">
                <GroupAge items={DefaultOccupantAgeGroup} />
              </div>
            </div>
          )}
        </div>

        <div>
          {mode && (
            <div>
              <div className="">
                Slider
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="row-span-1">
        <PageFooter />
      </div>
    </div>
  )
}
