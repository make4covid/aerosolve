import { RiskChip } from 'components/RiskChip/RiskChip'

export type SpaceTypeProps = {
  label: string
  img: string
  risk?: 'High' | 'Medium' | 'Low'
}

export const SpaceType: React.FC<SpaceTypeProps> = (props) => {
  return (
    <div className="relative flex flex-row items-center justify-between w-full h-40 overflow-hidden bg-gray-100 shadow-lg rounded-xl">
      <div className="ml-5 text-2xl font-semibold text-gray-600">{props.label}</div>
      <img
        src={props.img}
        alt={props.label}
        className="object-cover w-7/12 min-h-full mix-blend-multiply"
      />
      {props.risk && (
        <RiskChip risk={props.risk} className="absolute bg-opacity-80 top-3 right-3 " />
      )}
    </div>
  )
}
