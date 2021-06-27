import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import {
  RecommendationTile as RecommendationTileComponent,
  RecommendationTileProps,
} from './RecommendationTile'

import HEPA from 'assets/images/hepa.png'
import Singing from 'assets/images/singing.png'
import { ReactComponent as Clock } from 'assets/icons/clock.svg'

export default {
  title: 'Aerosolve/Components/RecommendationTile',
  component: RecommendationTileComponent,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}

const Template: Story<RecommendationTileProps> = (args) => {
  return (
    <div className="w-32 h-36">
      <RecommendationTileComponent {...args} />
    </div>
  )
}

export const Action = Template.bind({})
Action.args = {
  image: HEPA,
  description: 'Use HEPA filters in HVAC system',
  icon: 'check',
  color: 'light-blue',
}

export const Reduce = Template.bind({})
Reduce.args = { image: Clock, description: 'Reduce time spent at full occupancy', icon: 'down' }

export const Stop = Template.bind({})
Stop.args = {
  image: Singing,
  description: 'Discourage heavy vocal activity such as singing',
  icon: 'pause',
  color: 'red',
}
