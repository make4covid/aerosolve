import React from 'react'
import { Checkmark, Pause, ArrowDown, Plus } from 'assets/icons'

export type RecommendationTileProps = {
  color: 'blue' | 'red' | 'light-blue'
  icon: 'check' | 'pause' | 'down' | 'plus'
  description: string
  image:
    | string
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined
        }
      >
}

const icons = {
  check: Checkmark,
  pause: Pause,
  down: ArrowDown,
  plus: Plus,
}

export const RecommendationTile: React.FC<RecommendationTileProps> = ({
  color = 'blue',
  ...props
}) => {
  const Image = props.image
  const Icon = icons[props.icon]

  return (
    <div
      className={`p-2 pt-3 rounded-lg border-2 border-${color}-500 w-full h-full hover:bg-${color}-50 transition-colors duration-150`}
    >
      <div className="relative w-12 h-12 mb-2">
        {typeof props.image === 'string' ? (
          <img
            src={props.image}
            className="object-cover w-full h-full overflow-hidden rounded-full mix-blend-multiply"
          />
        ) : (
          <Image className="w-12 h-12 text-gray-500 fill-current" />
        )}
        <Icon className={`text-${color}-500 fill-current w-3.5 h-3.5 absolute -top-1.5 -right-2`} />
      </div>
      <div className="w-5/6 text-xs font-semibold text-gray-600">{props.description}</div>
    </div>
  )
}
