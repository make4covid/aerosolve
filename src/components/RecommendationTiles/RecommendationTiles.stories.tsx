import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { RecommendationTiles as RecommendationTilesComponent } from './RecommendationTiles'

import HEPA from 'assets/images/hepa.png'
import Singing from 'assets/images/singing.png'
import { ReactComponent as Clock } from 'assets/icons/clock.svg'

export default {
  title: 'Aerosolve/Components/RecommendationTiles',
  component: RecommendationTilesComponent,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}

const RecommendationTiles: Story<{}> = (args) => <RecommendationTilesComponent {...args} />
