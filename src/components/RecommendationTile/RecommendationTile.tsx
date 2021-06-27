import React from 'react'
import { ReactComponent as DownArrow } from 'assets/icons/arrow-circle-down.svg'
import { ReactComponent as Checkmark } from 'assets/icons/checkmark.svg'
import { ReactComponent as Pause } from 'assets/icons/pause.svg'

export type RecommendationTileProps = {
  color: 'blue' | 'red' | 'light-blue'
  icon: 'check' | 'pause' | 'down'
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
  down: DownArrow,
}

export const RecommendationTile: React.FC<RecommendationTileProps> = ({
  color = 'blue',
  ...props
}) => {
  const Image = props.image
  const Icon = icons[props.icon]
  // const Icon = Checkmark
  return (
    <div className={`p-2 pt-3 rounded-lg border-2 border-${color}-500 w-32 h-36`}>
      <div className="relative w-12 h-12 mb-2">
        {typeof props.image === 'string' ? (
          <img
            src={props.image}
            className="object-cover w-full h-full overflow-hidden rounded-full shadow-inner"
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
