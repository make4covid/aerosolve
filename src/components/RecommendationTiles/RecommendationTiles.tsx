import * as Images from 'assets/images'
import * as SVG from 'assets/svg'

import {
  RecommendationTile,
  RecommendationTileProps,
} from 'components/RecommendationTile/RecommendationTile'

export const RecommendationTiles: React.FC<{}> = (props) => {
  return (
    <div className="grid w-full max-w-md grid-cols-3 grid-rows-3 gap-3">
      {tiles.map((tile) => (
        <RecommendationTile {...tile}></RecommendationTile>
      ))}
    </div>
  )
}

const tiles: RecommendationTileProps[] = [
  {
    description: 'Reduce the max number of occupants',
    image: SVG.People,
    color: 'blue',
    icon: 'down',
  },
  {
    description: 'Reduce time spent at full occupancy',
    image: SVG.Clock,
    color: 'blue',
    icon: 'down',
  },
  {
    description: 'Encourage occupants to wear double masks',
    image: Images.maskDouble,
    color: 'light-blue',
    icon: 'plus',
  },
  {
    description: 'Open windows and doors to improve ventilation',
    image: Images.window,
    color: 'blue',
    icon: 'check',
  },
  {
    image: Images.maskDisposable,
    description: 'Offer occupants free disposable masks',
    icon: 'plus',
    color: 'light-blue',
  },
  {
    image: Images.maskFit,
    description: 'Make sure occupants are wearing properly fitted masks',
    icon: 'check',
    color: 'blue',
  },
  {
    image: Images.hepa,
    description: 'Use HEPA filters in the HVAC system',
    icon: 'plus',
    color: 'light-blue',
  },
  {
    image: Images.singing,
    description: 'Discourage heavy vocal activity such as singing',
    icon: 'pause',
    color: 'red',
  },
  {
    image: Images.physical,
    description: 'Discourage intense physical activity such as exercise',
    icon: 'pause',
    color: 'red',
  },
]
