import React from 'react'

export type RightPanelProps = {
  header?: string
  confirmed_case: number
  today_case: number
  death_total_case: number
  death_today_case: number
  vaccination_rate: number
  vaccination_total: number
  relative_air_humidity: number
}

export const RightPanel: React.FC<RightPanelProps> = (props) => {
  return (
    <div className="container grid w-full h-full grid-rows-4 bg-gray-500 rounded-lg">
      <div className="row-span-1 text-white">
        <div className="bg-gray-400">Confirmed Covid Cases in Colorado</div>
        <div className="bg-gray-600">
          {props.confirmed_case} + {props.today_case} cases today
        </div>
      </div>

      <div className="row-span-1 text-xl text-white">
        <div className="bg-gray-400">Deaths</div>
        <div className="bg-gray-600">
          {props.death_today_case} + {props.death_today_case} cases today
        </div>
      </div>

      <div className="row-span-1 text-white">
        <div className="bg-gray-400">Vaccination Rate</div>
        <div className="bg-gray-600">
          {props.vaccination_rate} {props.vaccination_total} people fully immunized
        </div>
      </div>

      <div className="row-span-1">
        <div className="bg-gray-400">Relative Air Humidity</div>
        <div className="bg-gray-600">{props.relative_air_humidity}</div>
      </div>
    </div>
  )
}