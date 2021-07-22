import React, {useContext, useState} from 'react'
import { SelectionCardGroup } from 'components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from 'components/SelectionCard/SelectionCard'
import { StepViewProps } from 'data'
import { SpaceType, SpaceTypeProps } from 'components/SpaceType/SpaceType'
import * as Models from 'assets/models'
import tw, { styled } from 'twin.macro'
import { RiskChip } from 'components/RiskChip/RiskChip'
import clsx from 'clsx'
import { useEffect } from 'react'
import {AppContext} from "../../../context";

let options: SpaceTypeProps[] = [
  {
    label: 'Living Room',
    risk: 'Low',
    img: Models.livingroom,
    floorArea: 400,
    ceilingHeight: 9,
    ventilation: 3,
    filtration: 6,
    recircRate: 1,
    rh: 0.6
  },
  {
    label: 'Classroom',
    risk: 'Low',
    img: Models.classroom,
    floorArea: 910,
    ceilingHeight: 12,
    ventilation: 3,
    filtration: 6,
    recircRate: 1,
    rh: 0.6
  },
  {
    label: 'Place of Worship',
    risk: 'Medium',
    img: Models.placeofworship,
    floorArea: 1900,
    ceilingHeight: 30,
    ventilation: 2,
    filtration: 6,
    recircRate: 1,
    rh: 0.6
  },
  {
    label: 'Restaurant',
    risk: 'Medium',
    img: Models.restaraunt,
    floorArea: 1000,
    ceilingHeight: 12,
    ventilation: 9,
    filtration: 6,
    recircRate: 1,
    rh: 0.6
  },
  {
    label: 'Office',
    risk: 'Medium',
    img: Models.office,
    floorArea: 10000,
    ceilingHeight: 12,
    ventilation: 8,
    filtration: 10,
    recircRate: 1,
    rh: 0.6
  },
  {
    label: 'Bus / Train',
    risk: 'High',
    img: Models.abstract,
    floorArea: 380,
    ceilingHeight: 10,
    ventilation: 8,
    filtration: 6,
    recircRate: 1,
    rh: 0.6
  },
  {
    label: 'Commercial Airline',
    risk: 'High',
    img: Models.airplane,
    floorArea: 1440,
    ceilingHeight: 6.7,
    ventilation: 24,
    filtration: 17,
    recircRate: 24,
    rh: 0.2
  },
  /*What the value?*/
  {
    label: 'Museum / Gallery',
    risk: 'High',
    img: Models.museum,
    floorArea: 6000 ,
    ceilingHeight:13,
    ventilation: 24,
    filtration: 17,
    recircRate: 1,
    rh: 0.60
  },
  /*What the value?*/
  {
    label: 'Gym / Fitness Center',
    risk: 'High',
    img: Models.gym,
    floorArea: 1500,
    ceilingHeight: 20,
    ventilation: 2.2,
    filtration: 12,
    recircRate: 1,
    rh: 0.6
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
  const [context, dispatch] = useContext(AppContext)
  const {
    userInputs: { roomTypeSelection },
  } = context

  const setRoomArea = (value?: number) => dispatch({ type: 'setRoomArea', payload: { value } })
  const setCeilingHeight = (value?: number) => dispatch({ type: 'setCeilingHeight', payload: { value } })
  const setVentilation = (value?: number) => dispatch({ type: 'setVentilation', payload: { value:value, needCalculator:false } })
  const setFiltration = (value?: number) => dispatch({ type: 'setFiltration', payload: { value:value, needCalculator:false } })
  const setRecirculation = (value?: number) => dispatch({ type: 'setRecirculation', payload: { value:value, needCalculator:false }  })
  const setHumidity = (value?: number) => dispatch({ type: 'setHumidity', payload: { value:value, needCalculator:false } })
  const setRoomTypeSelection = (value:number) => dispatch({type: 'setRoomTypeSelection', payload:{value}})

  return (
    <div className="flex flex-col w-full min-h-full">
      {(roomTypeSelection == -1 ? <SpaceType img={Models.abstract} label="Generic Room" />:<SpaceType {...options[roomTypeSelection]}/> )}
      <OptionGrid>
        {options.map((option, index) => (
          <Option
            selected= {(roomTypeSelection === index)}
            // className={clsx(selected === index && `border-${riskColors[option.risk!]}-500`)}
            onClick={() => {
              props.onComplete()
              roomTypeSelection === index ? setRoomTypeSelection(-1) : setRoomTypeSelection(index)
              setRoomArea(option.floorArea)
              setCeilingHeight(option.ceilingHeight)
              setVentilation(option.ventilation)
              setFiltration(option.filtration)
              setRecirculation(option.recircRate)
              setHumidity(option.rh)
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
