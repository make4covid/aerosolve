import { RiskChip } from 'components/RiskChip/RiskChip'
import tw, { styled } from 'twin.macro'
import React from 'react'
import { CovidCard } from '../CovidCard/CovidCard'

export type CovidDataProps = {
  country: string
  country_risk: 'Low' | 'Medium' | 'High'
  country_cases: number
  country_newCases: number
  country_deaths: number
  country_newDeaths: number
  country_vaccinationRate: number

  state: string
  state_risk: 'Low' | 'Medium' | 'High'
  state_cases: number
  state_newCases: number
  state_deaths: number
  state_newDeaths: number
  state_vaccinationRate: number

  county: string
  county_risk: 'Low' | 'Medium' | 'High'
  county_cases: number
  county_newCases: number
  county_deaths: number
  county_newDeaths: number
  county_vaccinationRate: number
}

export const CovidData1_1: React.FC<CovidDataProps> = (props, risk = 'Low') => {
  return (
    <div className="grid w-full h-full grid-rows-6 p-4 bg-gray-100 divide-y divide-gray-300 gap-y-2 rounded-xl">
      <div className="row-span-1">
        <div className="">
          <span className="">Current COVID transmission risk in your location</span>
          <RiskChip className="float-right" risk={props.county_risk} />
        </div>
      </div>

      <div className="row-span-1 py-2">
        <div>
          {'% of Population Vaccinated within:'}{' '}
          <span className={'border-2 text-blue-500 rounded-md border-blue-500'}>
            {'At Least One Dose'}
          </span>{' '}
          {'in'}:
        </div>
      </div>
      <div className="row-span-4">
        <div className="flex flex-row h-full py-2 space-x-2">
          <CovidCard
            label={props.country}
            percentage={0}
            cases={0}
            newCases={0}
            risk={props.country_risk}
          />
          <CovidCard
            label={props.state}
            percentage={0}
            cases={0}
            newCases={0}
            risk={props.state_risk}
          />
          <CovidCard
            label={props.county}
            percentage={0}
            cases={0}
            newCases={0}
            risk={props.county_risk}
          />
        </div>
      </div>
    </div>
  )
}
