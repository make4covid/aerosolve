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
    <div className="p-4 bg-gray-100 rounded-xl">
      <div className="grid grid-cols-1 grid-rows-4 gap-2 divide-y-2 divide-gray-300">
        <div className="flex flex-row items-center justify-between pb-2">
          <div className="text-sm font-semibold text-gray-600">
            Local COVID-19 transmission risk
          </div>
          <div className="px-6 py-1 font-medium text-gray-500 bg-white border-2 border-blue-500 rounded-full">
            {props.risk} Risk
          </div>
        </div>
        <div className="py-2">Some Text</div>
        <div className="py-2">Some Text</div>
        <div className="py-2">Some Text</div>
      </div>
    </div>
  )
}
