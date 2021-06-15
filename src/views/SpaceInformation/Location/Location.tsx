import React from 'react'
// import { SelectionSlider } from 'components/SelectionSlider/SelectionSlider'
import { InputLocation } from 'components/InputLocation/InputLocation'
import { LeftPanel } from './LeftPanel'
import { RightPanel } from './RightPanel'
import { StepViewProps } from '../../../data'

export type LocationProps = {
  header?: string
  title: string
  question: string
  recommendation: string
  hours: number
  description: string
}

export const Location: React.FC<StepViewProps> = (props) => {
  return (
    <div className="max-h-screen width-full">
      <div className="relative w-full my-8 lg:h-20 rounded-xl">
        <div className="h-16">
          <InputLocation location={'CO'} />
        </div>
      </div>

      <div className="flex w-full space-x-4 lg:h-96 flex-cols">
        <div className="flex-1 w-2/5">
          <LeftPanel
            title={'The COVID transmissive rate at your current\nlocation is at'}
            rate={'Low Risk'}
            description={'due to high vaccination rate'}
          />
        </div>
        <div className="flex-1 w-3/5 ">
          <RightPanel
            confirmed_case={11021}
            today_case={17}
            death_total_case={420}
            death_today_case={0}
            vaccination_rate={22}
            vaccination_total={1272898}
            relative_air_humidity={47}
          />
        </div>
      </div>
    </div>
  )
}
