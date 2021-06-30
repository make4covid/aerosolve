import React, { useState } from 'react'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import { StepViewProps } from 'data'
import { SpaceType, SpaceTypeProps } from 'components/SpaceType/SpaceType'
import * as Models from 'assets/models'
import tw, { styled } from 'twin.macro'
import { RiskChip } from 'components/RiskChip/RiskChip'
import clsx from 'clsx'
import { useEffect } from 'react'

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

const OptionGrid = tw.div`grid grid-rows-3 grid-cols-3 gap-4 mt-5`
// const Option = tw.div`pt-2 pb-3 px-3 rounded-lg font-semibold text-gray-700`
const Option = styled.div((props: { selected: boolean }) => [
  tw`px-3 pt-2 pb-3 font-semibold text-gray-700 transition duration-300 rounded-lg cursor-pointer select-none hover:shadow-lg`,
  props.selected && tw`bg-white bg-blue-200 `,
  props.selected || tw`bg-gray-100 border-transparent`,
])

export const TypeOfSpace: React.FC<StepViewProps> = (props) => {
  const [selected, setSelected] = useState(undefined as number | undefined)

  const riskColors = { Low: 'blue', Medium: 'purple', High: 'red' }

  return (
    <div className="flex flex-col justify-center w-full h-full">
      {selected != undefined && <SpaceType {...options[selected]} />}
      {selected === undefined && <SpaceType img={Models.abstract} label="Generic Room" />}
      <OptionGrid>
        {options.map((option, index) => (
          <Option
            selected={selected === index}
            // className={clsx(selected === index && `border-${riskColors[option.risk!]}-500`)}
            onClick={() => {
              props.onComplete()
              selected === index ? setSelected(undefined) : setSelected(index)
            }}
          >
            {option.label}
            <RiskChip risk={option.risk!} className="mt-2 bg-gray-100 max-w-min"></RiskChip>
          </Option>
        ))}
      </OptionGrid>
    </div>
  )
}
