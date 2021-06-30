import React, { useState } from 'react'
import { StepViewProps } from 'data'
import tw from 'twin.macro'
import { Slider } from 'components/Slider/Slider'
import { NumberOfOccupants } from 'components/NumberOfOccupants/NumberOfOccupants'
import { AppContext } from 'context'

import { Plus, Minus } from 'assets/svg'
import { useContext } from 'react'
import { useEffect } from 'react'

const Section = tw.div`px-6 py-4 rounded-xl bg-gray-200`

export const TargetOccupancy: React.FC<StepViewProps> = (props) => {
  const [
    {
      progress: { targetHours: hours, targetOccupancy: people },
    },
    dispatch,
  ] = useContext(AppContext)

  const setPeople = (value: number) => {
    dispatch({ type: 'setTargetOccupancy', payload: { value } })
  }

  const setHours = (value: number) => {
    dispatch({ type: 'setTargetHours', payload: { value } })
  }

  useEffect(() => {
    props.onComplete()
  }, [])

  return (
    <div className="grid w-full h-full grid-cols-1 grid-rows-5 gap-6">
      <Section className="flex flex-row items-center justify-around row-span-3">
        <NumberOfOccupants value={people} onChange={setPeople} className="w-1/2" />
        <div className="flex flex-col items-center m-auto bg-white border-2 border-blue-500 max-w-min rounded-xl">
          <div className="flex flex-row items-center h-20 p-1 mx-2 text-3xl font-semibold text-blue-600">
            <Minus
              className="w-8 h-8 cursor-pointer fill-current"
              onClick={() => {
                let newPeople = 1
                people <= 20 && (newPeople = people - 1)
                people > 20 && people <= 50 && (newPeople = Math.max(people - 2, 20))
                people > 50 && people <= 100 && (newPeople = Math.max(people - 5, 50))
                people > 100 && people <= 500 && (newPeople = Math.max(people - 10, 100))
                people > 500 && people <= 1000 && (newPeople = Math.max(people - 50, 500))
                people > 1000 && people <= 5000 && (newPeople = Math.max(people - 100, 1000))
                people > 5000 && (newPeople = Math.max(people - 500, 5000))
                setPeople(newPeople)
              }}
            />
            <input
              style={{ maxWidth: `6ch` }}
              name="people"
              id="people"
              className="font-semibold text-center outline-none"
              value={people}
              onChange={(e) => {
                isNaN(parseInt(e.target.value)) || setPeople(parseInt(e.target.value))
              }}
              onClick={(e) => {
                ;(e.target as HTMLInputElement).select()
              }}
            />
            <Plus
              className="w-8 h-8 cursor-pointer fill-current"
              onClick={() => {
                let newPeople = 1
                people < 20 && (newPeople = people + 1)
                people >= 20 && people < 50 && (newPeople = Math.min(people + 2, 50))
                people >= 50 && people < 100 && (newPeople = Math.min(people + 5, 100))
                people >= 100 && people < 500 && (newPeople = Math.min(people + 10, 500))
                people >= 500 && people < 1000 && (newPeople = Math.min(people + 50, 1000))
                people >= 1000 && people < 5000 && (newPeople = Math.min(people + 100, 5000))
                people >= 5000 && (newPeople = people + 500)
                setPeople(newPeople)
              }}
            />
          </div>
          <div className="w-full pt-1 pb-1.5 text-sm font-medium text-center text-gray-500 border-t select-none">
            occupants
          </div>
        </div>
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
