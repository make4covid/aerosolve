import { RiskChip } from '../RiskChip/RiskChip'
import React from 'react'
import { useEffect } from 'react'

export type CovidCardProps = {
  label?: string
  className?: string
  percentage: number
  total: number
  cases?: number
  newCases?: number
  risk: 'Baseline' | 'Average' | 'Above Average' | 'Below Average'
}

export const CovidCard: React.FC<CovidCardProps> = (props) => {
  const riskMap: {
    [key: string]: 'Low' | 'Medium' | 'High' | undefined
  } = {
    Baseline: undefined,
    Average: 'Medium',
    'Above Average': 'Low',
    'Below Average': 'High',
  }

  return (
    <div className=" flex flex-col justify-between w-full min-h-full overflow-hidden">
      <div className="h-2/3 justify-evenly flex flex-col flex-grow-0 p-2">
        <div className="mb-1 font-semibold text-gray-500">{props.label}</div>
        <div className={'text-3xl font-semi-bold text-gray-700'}>
          {props.percentage + '%'}
          {/* <span className="text-lg font-thin text-gray-500">vaccinated</span> */}
        </div>
        <RiskChip className="my-2 mt-3" risk={riskMap[props.risk]} label={props.risk} />
      </div>
      <div className="h-1/3 flex flex-row items-center justify-between flex-grow p-2 px-3 bg-gray-300 rounded-none">
        <div className="m-1 mr-5 text-xs">People who are fully vaccinated</div>
        <div>{Number(props.total).toLocaleString()}</div>
      </div>
    </div>
  )
}
