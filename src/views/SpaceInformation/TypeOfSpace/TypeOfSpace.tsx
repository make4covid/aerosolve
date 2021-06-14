import React from 'react'
import { GroupSpace } from 'components/SelectionCardGroup/GroupSpace'
import { CardGroupItem } from 'components/SelectionCardGroup/SelectionCardGroupItem/ItemSpace'
import { StepViewProps } from 'data'

const defaultTypeOfSpaceGroup: CardGroupItem[] = [
  {
    value: 'Living Room',
    risk: 'Low Risk',
    active: true,
    route: 'test',
    completed: true,
  },
  {
    value: 'Classroom',
    risk: 'High Risk',
    active: false,
    route: 'test',
    completed: false,
  },
  {
    value: 'Classroom1',
    risk: 'Medium Risk',
    active: false,
    route: 'test',
    completed: false,
  },
  {
    value: 'Classroom2',
    risk: 'High Risk',
    active: false,
    route: 'test',
    completed: false,
  },
]

export const TypeOfSpace: React.FC<StepViewProps> = (props) => {
  return (
    <div className="grid h-screen gap-2 divide-gray-400 grid-rows-8 ">
      <div className="row-span-2"></div>

      <div className="relative row-span-5">
        <GroupSpace items={defaultTypeOfSpaceGroup} />
      </div>
      <div className="relative row-span-1"></div>
    </div>
  )
}
