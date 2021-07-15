import React, { useCallback, useContext, useState } from 'react'
import { InputLocation } from 'components/InputLocation/InputLocation'
import { StepViewProps } from 'data'

import {
  getCountryVaccineData,
  getCountyVaccineData,
  getStateVaccineData,
} from 'service/CDCDataService'

import tw from 'twin.macro'
import { useEffect } from 'react'
import { AppContext, VaccinationData } from 'context'
import { stateCodes } from 'data/state-county'
import { CovidCard } from 'components/CovidCard/CovidCard'
import { RiskChip } from 'components/RiskChip/RiskChip'

const Section = tw.div`p-4 rounded-xl bg-gray-100`
const Card = tw.div` bg-gray-200 rounded-lg overflow-hidden h-full`
const Placeholder = tw.div`h-full flex flex-col text-2xl text-gray-400 items-center justify-center`

export const Location: React.FC<StepViewProps> = (props) => {
  const [{ userInputs, vaccinations }, dispatch] = useContext(AppContext)
  const [county, setCounty] = useState(userInputs.location.county)
  const [state, setState] = useState(userInputs.location.state)

  const inputProps = { county, setCounty, state, setState }

  const [risk, setRisk] = useState('Medium' as 'Low' | 'Medium' | 'High')

  useEffect(() => {
    // dispatch({ type: 'setVaccinationData', payload: { county: undefined } })
    dispatch({ type: 'setLocation', payload: { state, county } })
  }, [county])

  useEffect(() => {
    // dispatch({ type: 'setVaccinationData', payload: { state: undefined } })
    dispatch({ type: 'setLocation', payload: { state, county: 'County' } })
  }, [state])

  useEffect(() => {
    const vaccinated =
      vaccinations.county?.percent ||
      vaccinations.state?.percent ||
      vaccinations.country?.percent ||
      40

    const risk = vaccinated < 40 ? 'High' : vaccinated < 55 ? 'Medium' : 'Low'

    setRisk(risk)
  }, [vaccinations])

  useEffect(() => props.onComplete(), [])

  return (
    <div className="flex flex-col w-full min-h-full gap-6">
      <InputLocation className="z-30" {...inputProps} />
      <Section>
        <div className="flex flex-row items-center gap-5 pb-3 text-xl font-semibold text-gray-600 border-b-2 border-gray-300">
          <div>Current COVID-19 risk in your area:</div>
          <RiskChip risk={risk} className="text-lg" />
        </div>
        <div className="my-3 font-semibold text-gray-500">% of population fully vaccinated in:</div>
        <div className="grid items-stretch grid-cols-3 gap-3">
          <Card>
            <CountryCard />
          </Card>
          <Card>
            {state != 'State' ? (
              <StateCard state={state} />
            ) : (
              <Placeholder>Select a State</Placeholder>
            )}
          </Card>
          <Card>
            {county != 'County' ? (
              <CountyCard state={state} county={county} />
            ) : (
              <Placeholder>Select a County</Placeholder>
            )}
          </Card>
        </div>
      </Section>
    </div>
  )
}

const CountryCard: React.FC<{}> = () => {
  const [{ vaccinations }, dispatch] = useContext(AppContext)

  useEffect(() => {
    vaccinations.country ||
      getCountryVaccineData()
        .then((data) => {
          const total = data['people_fully_vaccinated']
          const pop = 328200000
          const percent = Math.round((total / pop) * 1000) / 10
          const country: VaccinationData = { total, percent, risk: 'Baseline' }
          return dispatch({ type: 'setVaccinationData', payload: { country } })
        })
        .catch((e) => console.error(`Country Fetch Error: ${e}`))
  }, [])

  return (
    <div>
      {vaccinations.country ? (
        <CovidCard
          label="United States"
          percentage={vaccinations.country.percent}
          total={vaccinations.country.total}
          risk="Baseline"
        />
      ) : (
        <div>No country data</div>
      )}
    </div>
  )
}

const relativeRisk = (baseline: number, comparison: number) => {
  if (Math.abs(baseline - comparison) < 1) return 'Average'
  return baseline > comparison ? 'Below Average' : 'Above Average'
}

const StateCard: React.FC<{ state: string }> = (props) => {
  const [{ vaccinations }, dispatch] = useContext(AppContext)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setError('')
    setLoading(true)
    getStateVaccineData(stateCodes[props.state])
      .then((data) => {
        const total = data['vaccine_rate_total']
        const percent = Math.round(data['vaccinate_rate_pcr'] * 10) / 10
        const risk = relativeRisk(vaccinations.country!.percent, percent)
        const state: VaccinationData = { total, percent, risk }
        dispatch({ type: 'setVaccinationData', payload: { state } })
        setLoading(false)
      })
      .catch((e) => setError(e.name))
  }, [props.state])

  return loading ? (
    <FetchLoading />
  ) : vaccinations.state ? (
    <CovidCard
      label={props.state}
      percentage={vaccinations.state.percent}
      total={vaccinations.state.total}
      risk={vaccinations.state.risk}
    />
  ) : error ? (
    <FetchError label={`${props.state}`} />
  ) : (
    <div></div>
  )
}

const CountyCard: React.FC<{ state: string; county: string }> = (props) => {
  const [{ vaccinations }, dispatch] = useContext(AppContext)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setError('')
    setLoading(true)
    getCountyVaccineData(stateCodes[props.state], props.county)
      .then((data) => {
        const total = data['vaccine_rate_total']
        const percent = Math.round(data['vaccinate_rate_pcr'] * 10) / 10
        const risk = relativeRisk(vaccinations.country!.percent, percent)
        const county: VaccinationData = { total, percent, risk }
        dispatch({ type: 'setVaccinationData', payload: { county } })
        setLoading(false)
      })
      .catch((e: Error) => setError(e.name))
  }, [props.county])

  return loading ? (
    <FetchLoading />
  ) : vaccinations.county ? (
    <CovidCard
      label={props.county}
      percentage={vaccinations.county.percent}
      total={vaccinations.county.total}
      risk={vaccinations.county.risk}
    />
  ) : error ? (
    <FetchError label={`${props.county}`} />
  ) : (
    <div></div>
  )
}

export const FetchError: React.FC<{ label: string }> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full mx-10 font-semibold text-center text-red-600 opacity-60">
      Vaccination data is unavailable for {props.label}.
    </div>
  )
}
export const FetchLoading: React.FC<{}> = () => {
  return (
    <div className="flex flex-col w-full h-full gap-2 p-5 animate-pulse">
      <div className="w-1/2 h-5 bg-gray-300 rounded-lg"></div>
      <div className="flex-grow w-full bg-gray-300 rounded-lg h-1/2"></div>
    </div>
  )
}
