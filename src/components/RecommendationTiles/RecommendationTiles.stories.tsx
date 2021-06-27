import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { RecommendationTiles as RecommendationTilesComponent } from './RecommendationTiles'

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

export const RecommendationTiles: Story<{}> = (args) => {
  return (
    <div className="h-full max-w-lg min-w-lg">
      <RecommendationTilesComponent {...args} />
    </div>
  )
}
