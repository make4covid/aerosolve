import { RiskChip } from 'components/RiskChip/RiskChip'
import tw, { styled } from 'twin.macro'

const Overline = styled.div`
  ${tw`text-xs font-semibold leading-5 text-gray-500`}
`
const Dataline = styled.div`
  ${tw`flex flex-row justify-between text-xl font-semibold text-gray-600`}
`
const Sup = styled.div`
  ${tw`mr-1 text-base`}
`

export type CovidDataProps = {
  risk: 'Low' | 'Medium' | 'High'
  state: string
  cases: number
  newCases: number
  deaths: number
  newDeaths: number
  vaccinationRate: number
}

export const CovidData: React.FC<CovidDataProps> = (props) => {
  return (
    <div className="px-4 py-2 bg-gray-100 rounded-xl">
      <div className="grid grid-cols-1 grid-rows-4 gap-1 divide-y-2 divide-gray-300">
        <div className="flex flex-row items-center justify-between">
          <div className="flex-grow mr-8 text-sm font-semibold text-gray-600">
            Current COVID-19 transmission risk in {props.state}
          </div>
          <RiskChip risk={props.risk} />
        </div>
        <div className="pt-3">
          <Overline>Active COVID-19 Cases in {props.state}</Overline>
          <Dataline>
            <div>{props.cases.toLocaleString()}</div>
            <Sup>+{props.newCases.toLocaleString()} new cases today</Sup>
          </Dataline>
        </div>
        <div className="py-2">
          <Overline>Total COVID-19 Deaths in {props.state}</Overline>
          <Dataline>
            <div>{props.deaths.toLocaleString()}</div>
            <Sup>+{props.newDeaths.toLocaleString()} new deaths today</Sup>
          </Dataline>
        </div>
        <div className="py-2">
          <Overline>% of Population Fully Vaccinated</Overline>
          <Dataline>
            <div>{props.vaccinationRate}%</div>
          </Dataline>
        </div>
      </div>
    </div>
  )
}
