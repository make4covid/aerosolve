import React, { useCallback, useContext, useState } from 'react'
import { InputLocation } from 'components/InputLocation/InputLocation'
import { StepViewProps } from 'data'
import { CovidData1_1 } from 'components/CovidRisk/CovidData1_1'

import { getCountyVaccineData, getStateCountyData } from 'service/CDCDataService'

import tw from 'twin.macro'
import { useEffect } from 'react'
import { AppContext } from 'context'
import debounce from 'lodash.debounce'
import { stateCodes } from 'data/state-county'
const Section = tw.div`px-6 py-4 rounded-xl bg-gray-200`

export const Location: React.FC<StepViewProps> = () => {
  const [{ userInputs }, dispatch] = useContext(AppContext)
  const [county, setCounty] = useState(userInputs.location.county)
  const [state, setState] = useState(userInputs.location.state)

  const debouncedSaveLocation = useCallback(
    debounce(async ({ state, county }) => {
      dispatch({ type: 'setLocation', payload: { state, county } })
      // getStateCountyData(state, county, new Date())
      getCountyVaccineData(stateCodes[state], county)
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.error(e)
        })
    }, 1000),
    []
  )

  const inputProps = { county, setCounty, state, setState }

  useEffect(() => {
    if (county != 'County' && state != 'State') {
      debouncedSaveLocation({ state, county })
    }
  }, [county])

  return (
    <div className="flex flex-col w-full min-h-full gap-6">
      <InputLocation className="z-30" {...inputProps} />
      <Section className="flex flex-row items-center justify-around">
        <CovidData1_1
          country={'USA'}
          country_risk={'Low'}
          country_cases={0}
          country_newCases={0}
          country_deaths={0}
          country_newDeaths={0}
          country_vaccinationRate={0}
          state={'Colorado'}
          state_risk={'Low'}
          state_cases={0}
          state_newCases={0}
          state_deaths={0}
          state_newDeaths={0}
          state_vaccinationRate={0}
          county={'Denver'}
          county_risk={'High'}
          county_cases={0}
          county_newCases={0}
          county_deaths={0}
          county_newDeaths={0}
          county_vaccinationRate={0}
        />
      </Section>
    </div>
  )
}
