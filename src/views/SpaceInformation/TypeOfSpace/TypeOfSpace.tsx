import React, { useState } from 'react'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import { StepViewProps } from 'data'
import { SpaceType, SpaceTypeProps } from 'components/SpaceType/SpaceType'
import * as Models from 'assets/models'
import tw from 'twin.macro'
import { RiskChip } from 'components/RiskChip/RiskChip'

let options: SpaceTypeProps[] = [
  {
    label: 'Living Room',
    risk: 'Low',
    img: Models.livingroom,
  },
  {
    label: 'Classroom',
    risk: 'Low',
    img: Models.classroom,
  },
  {
    label: 'Place of Worship',
    risk: 'Medium',
    img: Models.placeofworship,
  },
  {
    label: 'Restaurant',
    risk: 'Medium',
    img: Models.restaraunt,
  },
  {
    label: 'Office',
    risk: 'Medium',
    img: Models.abstract,
  },
  {
    label: 'Bus / Train',
    risk: 'High',
    img: Models.abstract,
  },
  {
    label: 'Commercial Airline',
    risk: 'High',
    img: Models.airplane,
  },
  {
    label: 'Museum / Gallery',
    risk: 'High',
    img: Models.museum,
  },
  {
    label: 'Gym / Fitness Center',
    risk: 'High',
    img: Models.abstract,
  },
]

const OptionGrid = tw.div`grid grid-rows-3 grid-cols-3`
const Option = tw.div`p-3 rounded-lg`

export const TypeOfSpace: React.FC<StepViewProps> = (props) => {
  const [selected, setSelected] = useState(undefined as SpaceTypeProps | undefined)

  return (
    <div className="w-full h-full my-4">
      {selected && <SpaceType {...selected} />}
      {selected || <SpaceType img={Models.abstract} label="Generic Room" />}

      {options.map((option) => (
        <Option>
          {option.label}
          <RiskChip risk={option.risk!}></RiskChip>
        </Option>
      ))}
    </div>
  )
}
