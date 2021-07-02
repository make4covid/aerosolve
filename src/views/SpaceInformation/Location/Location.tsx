import React from 'react'
import { InputLocation } from 'components/InputLocation/InputLocation'
import { StepViewProps } from '../../../data'
import {CovidData1_1} from "../../../components/CovidRisk/CovidData1_1";
import tw from "twin.macro";
const Section = tw.div`px-6 py-4 rounded-xl bg-gray-200`




export const Location: React.FC<StepViewProps> = (props) => {
  return (

      <div className="grid w-full h-full grid-cols-1 grid-rows-6 gap-6">
        <InputLocation className="z-30"/>
        <Section className="flex flex-row items-center justify-around row-span-5">
          <CovidData1_1
              country={"USA"}
              country_risk={"Low"}
              country_cases={0}
              country_newCases={0}
              country_deaths={0}
              country_newDeaths={0}
              country_vaccinationRate={0}
              state={"Colorado"}
              state_risk={"Low"}
              state_cases={0}
              state_newCases={0}
              state_deaths={0}
              state_newDeaths={0}
              state_vaccinationRate={0}
              county={"Denver"}
              county_risk={"High"}
              county_cases={0}
              county_newCases={0}
              county_deaths={0}
              county_newDeaths={0}
              county_vaccinationRate={0}/>
        </Section>

      </div>
  )
}
