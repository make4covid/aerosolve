import React, { useState } from 'react'
import { StepViewProps } from 'data'
import { PlainCard } from '../../../components/PlainCard/PlainCard'
import tw from 'twin.macro'
import { Slider } from 'components/Slider/Slider'
import { NumberOfOccupants } from 'components/NumberOfOccupants/NumberOfOccupants'

const Section = tw.div`px-6 py-4 rounded-xl bg-gray-200`

export const TargetOccupancy: React.FC<StepViewProps> = (props) => {
  const [people, setPeople] = useState(120)
  const [hours, setHours] = useState(4)

  return (
    <div className="grid w-full h-full grid-cols-1 grid-rows-5 gap-6">
      <Section className="flex flex-row items-center row-span-3">
        <NumberOfOccupants value={people} onChange={setPeople} className="w-1/2" />
        <div className="m-auto text-3xl font-semibold text-blue-700">{people}</div>
      </Section>
      <Section className="flex flex-col justify-around row-span-2">
        <div className="font-semibold text-gray-600">
          How many consecutive hours will the space be filled to your target occupancy?
        </div>
        <Slider
          interval={4}
          min={0}
          max={24}
          labelValues={true}
          unit="hour"
          onChange={setHours}
          value={hours}
        ></Slider>
      </Section>
    </div>
  )
}

// <div className="relative w-full my-4 bg-gray-300 lg:h-96 rounded-xl">
//     <PlainCard title={"Target Number of Occupants\n"}
//                description={`Target number of occupants~\n
//                     intended for the space to be~\n
//                     occupied in a single setting.~\n
//                     `}
//                occupants={true}
//     />
// </div>
// <div className="relative w-full h-64 bg-gray-300 rounded-xl">
//     <PlainCard title={"Target Number of Hours"}
//                description={"Target number of occupants intended for\n the space to be occupied in a single\nsetting."}
//                selectionHours={true}
//     />
// </div>
