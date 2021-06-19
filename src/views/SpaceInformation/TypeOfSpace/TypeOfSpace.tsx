import React, { useState } from 'react'
import { SelectionCardGroup } from '../../../components/SelectionCardGroup/SelectionCardGroup'
import { SelectionOptions } from '../../../components/SelectionCard/SelectionCard'
import Kids from 'assets/images/kids.svg'
import { StepViewProps } from '../../../data'
import { MainCard } from './MainCard'

export type TypeOfSpaceProps = {
  header?: string
  title: string
  question: string
  recommendation: string
  hours: number
  description: string
}

let options: SelectionOptions[] = [
  {
    title: 'Living Room',
    rating: 'Lowest Risk',
    description:
      'A living room is a small space usually occupied by closely related people. The space is also of low foot traffic and occupants are spaced far apart.',
    image: Kids,
  },
  {
    title: 'Classroom',
    rating: 'Lowest Risk',
    description: 'blabla',
    image: Kids,
  },
  {
    title: 'Place of Worship',
    rating: 'Medium Risk',
    description: 'blabla',
    image: Kids,
  },
  {
    title: 'Restaurant',
    rating: 'Medium Risk',
    description: 'blabla',
    image: Kids,
  },
  {
    title: 'Office',
    rating: 'Medium Risk',
    description: 'blabla',
    image: Kids,
  },
  {
    title: 'Bus/Train',
    rating: 'Higher Risk',
    description: 'blabla',
    image: Kids,
  },
  {
    title: 'Commercial Airline',
    rating: 'Higher Risk',
    description: 'blabla',
    image: Kids,
  },
  {
    title: 'Museum/ Gallery',
    rating: 'Higher Risk',
    description: 'blabla',
    image: Kids,
  },
  {
    title: 'Gym/ Fitness Center',
    rating: 'Higher Risk',
    description: 'blabla',
    image: Kids,
  },
]

export const TypeOfSpace: React.FC<StepViewProps> = (props) => {
  const [selected, setSelected] = useState([] as number[])

  return (
    <div className="w-full h-full my-4">
      {selected.length === 1 && (
        <div className="relative w-full my-4 bg-gray-100 lg:h-60 rounded-xl">
          <MainCard
            title={options[selected[0]].title}
            description={options[selected[0]].description}
            image={options[selected[0]].image}
            rating={options[selected[0]].rating}
          />
        </div>
      )}
      {selected.length === 0 && (
        <div className="relative w-full my-4 bg-gray-100 lg:h-60 rounded-xl">
          <MainCard
            title={options[0].title}
            description={options[0].description}
            image={options[0].image}
            rating={options[0].rating}
          />
        </div>
      )}
      <div className="relative w-full bg-white h-1/2 rounded-xl">
        <SelectionCardGroup
          options={options}
          multi={false}
          cardCol={false}
          columns={3}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  )
}
