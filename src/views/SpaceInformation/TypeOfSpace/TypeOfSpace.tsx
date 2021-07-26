import React, { useContext } from 'react'
import { StepViewProps } from 'data'
import { SpaceType, SpaceTypeProps } from 'components/SpaceType/SpaceType'
import * as Models from 'assets/models'
import tw, { styled } from 'twin.macro'
import { RiskChip } from 'components/RiskChip/RiskChip'
import { AppContext } from '../../../context'
import { useEffect } from 'react'
import { useState } from 'react'

type SpaceDefaultValues = {
  props: SpaceTypeProps
  model: {
    air_exchange_rate: number
    recirc_rate: number
    merv: number
  }
  userInputs: {
    ceilingHeight: number
    roomArea: number
    ageGroups: number[]
    vocalActivity: number[]
    physicalActivity: number[]
    ventilation: number
    filtration: number
    recirculation: number
  }
}

let spaceTypes: SpaceDefaultValues[] = [
  {
    props: {
      label: 'Living Room',
      risk: 'Low',
      img: Models.livingroom,
    },
    model: {
      air_exchange_rate: 3,
      merv: 6,
      recirc_rate: 1,
    },
    userInputs: {
      roomArea: 400,
      ceilingHeight: 9,
      ageGroups: [0, 1, 2],
      vocalActivity: [1],
      physicalActivity: [0],
      ventilation: 1,
      filtration: 1,
      recirculation: 1,
    },
  },
  {
    props: { label: 'Classroom', risk: 'Low', img: Models.classroom },
    model: {
      air_exchange_rate: 3,
      merv: 6,
      recirc_rate: 1,
    },
    userInputs: {
      roomArea: 400,
      ceilingHeight: 9,
      ageGroups: [0, 1, 2],
      vocalActivity: [1],
      physicalActivity: [0],
      ventilation: 1,
      filtration: 1,
      recirculation: 1,
    },
  },
  {
    props: { label: 'Place of Worship', risk: 'Medium', img: Models.placeofworship },
    model: {
      air_exchange_rate: 2,
      merv: 6,
      recirc_rate: 1,
    },
    userInputs: {
      roomArea: 1900,
      ceilingHeight: 30,
      ageGroups: [0, 1, 2],
      vocalActivity: [1],
      physicalActivity: [0],
      ventilation: 1,
      filtration: 1,
      recirculation: 1,
    },
  },
  {
    props: { label: 'Restaurant', risk: 'Medium', img: Models.restaraunt },
    model: {
      air_exchange_rate: 9,
      merv: 6,
      recirc_rate: 1,
    },
    userInputs: {
      roomArea: 1000,
      ceilingHeight: 12,
      ageGroups: [1],
      vocalActivity: [1, 2],
      physicalActivity: [0],
      ventilation: 3,
      filtration: 1,
      recirculation: 1,
    },
  },
  {
    props: { label: 'Office', risk: 'Medium', img: Models.office },
    model: {
      air_exchange_rate: 8,
      merv: 10,
      recirc_rate: 1,
    },
    userInputs: {
      roomArea: 10000,
      ceilingHeight: 12,
      ageGroups: [1],
      vocalActivity: [0, 1],
      physicalActivity: [0],
      ventilation: 1,
      filtration: 2,
      recirculation: 1,
    },
  },
  {
    props: { label: 'Bus / Train / Subway', risk: 'High', img: Models.abstract },
    model: {
      air_exchange_rate: 18,
      merv: 6,
      recirc_rate: 54,
    },
    userInputs: {
      roomArea: 380,
      ceilingHeight: 9,
      ageGroups: [1, 2],
      vocalActivity: [0],
      physicalActivity: [0],
      ventilation: 5,
      filtration: 1,
      recirculation: 5,
    },
  },
  {
    props: { label: 'Commercial Airline', risk: 'High', img: Models.airplane },
    model: {
      air_exchange_rate: 24,
      merv: 17,
      recirc_rate: 24,
    },
    userInputs: {
      roomArea: 1440,
      ceilingHeight: 9,
      ageGroups: [1, 2],
      vocalActivity: [0],
      physicalActivity: [0],
      ventilation: 5,
      filtration: 5,
      recirculation: 5,
    },
  },
  {
    props: { label: 'Museum / Gallery', risk: 'High', img: Models.museum },
    model: {
      air_exchange_rate: 8,
      merv: 10,
      recirc_rate: 1,
    },
    userInputs: {
      roomArea: 6000,
      ceilingHeight: 16,
      ageGroups: [1, 2],
      vocalActivity: [0],
      physicalActivity: [1],
      ventilation: 4,
      filtration: 3,
      recirculation: 1,
    },
  },
  {
    props: { label: 'Gym / Fitness Center', risk: 'High', img: Models.gym },
    model: {
      air_exchange_rate: 8,
      merv: 10,
      recirc_rate: 1,
    },
    userInputs: {
      roomArea: 3000,
      ceilingHeight: 20,
      ageGroups: [1],
      vocalActivity: [0],
      physicalActivity: [2, 3],
      ventilation: 4,
      filtration: 3,
      recirculation: 1,
    },
  },
]

const OptionGrid = tw.div`grid grid-cols-3 grid-rows-3 gap-4 mt-5`
// const Option = tw.div`px-3 pt-2 pb-3 font-semibold text-gray-700 rounded-lg`
const Option = styled.div((props: { selected: boolean }) => [
  tw`hover:shadow-lg px-3 pt-2 pb-3 font-semibold text-gray-700 transition duration-300 rounded-lg cursor-pointer select-none`,
  props.selected && tw` bg-white bg-blue-200`,
  props.selected || tw`bg-gray-100 border-transparent`,
])

export const TypeOfSpace: React.FC<StepViewProps> = (props) => {
  const [context, dispatch] = useContext(AppContext)

  useEffect(() => props.onComplete(), [])

  const [spaceTypeSelection, setSpaceTypeSelection] = useState(
    context.userInputs.spaceTypeSelection
  )

  useEffect(() => {
    if (spaceTypeSelection === -1) return
    const space = spaceTypes[spaceTypeSelection]
    const payload = { model: space.model, userInputs: space.userInputs }
    dispatch({ type: 'setDefaults', payload })
  }, [spaceTypeSelection, dispatch])

  return (
    <div className="flex flex-col w-full min-h-full">
      {spaceTypeSelection === -1 ? (
        <SpaceType img={Models.abstract} label="Generic Room" />
      ) : (
        <SpaceType {...spaceTypes[spaceTypeSelection].props} />
      )}
      <OptionGrid>
        {spaceTypes.map(({ props: option }, index) => (
          <Option
            selected={spaceTypeSelection === index}
            onClick={() => {
              props.onComplete()
              setSpaceTypeSelection(index)
              // spaceTypeSelection === index
              //   ? setSpaceTypeSelection(-1)
              //   : setSpaceTypeSelection(index)
            }}
          >
            {option.label}
            <RiskChip risk={option.risk!} className="max-w-min mt-2 bg-gray-100"></RiskChip>
          </Option>
        ))}
      </OptionGrid>
    </div>
  )
}
