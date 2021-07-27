import { RiskChip } from 'components/RiskChip/RiskChip'
import { Suspense } from 'react'

export type SpaceTypeProps = {
  label: string
  img: string
  risk?: 'High' | 'Medium' | 'Low'
}

export const SpaceType: React.FC<SpaceTypeProps> = (props) => {
  return (
    <div className="rounded-xl relative flex flex-row items-center justify-between w-full h-40 overflow-hidden bg-gray-100 shadow-lg">
      <div className="ml-5 text-2xl font-semibold text-gray-600">{props.label}</div>
      <Suspense fallback={<div></div>}>
        <img
          src={props.img}
          alt={props.label}
          className="mix-blend-multiply object-cover w-7/12 min-h-full"
        />
      </Suspense>
      {props.risk && (
        <RiskChip risk={props.risk} className="bg-opacity-80 top-3 right-3  absolute bg-white" />
      )}
    </div>
  )
}
