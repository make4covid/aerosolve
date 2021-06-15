import React from 'react'
import { StepViewProps } from 'data'
import { PlainCard } from '../../../components/PlainCard/PlainCard'
import Kids from 'assets/images/kids.png'

export const CeilingHeight: React.FC<StepViewProps> = (props) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full my-4 bg-gray-100 h-96">
        <div className="flex-1 p-4">
          <p className="text-3xl text-bold">Room Ceiling Height</p>
          <p className="text-lg ">
            Large rooms with tall ceilings have more air circulating, so it takes longer for exhaled
            aerosols to reach a dangerous concentration.{' '}
          </p>
        </div>
        <div className="flex-1 p-8">
          <img src={Kids} alt={''} />
        </div>
      </div>
      <div className="w-full h-64 bg-gray-100">
        <PlainCard selectionHeight={true} title={'Selection'} description={''} />
      </div>
    </div>
  )
}
