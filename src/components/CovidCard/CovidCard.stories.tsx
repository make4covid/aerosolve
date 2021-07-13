import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CovidCard as CovidCardComponent, CovidCardProps } from './CovidCard'

export default {
  title: 'Aerosolve/Components/CovidCard',
  component: CovidCardComponent,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}

export const Baseline: Story<CovidCardProps> = (args) => (
  <div className="w-96 h-96">
    <CovidCardComponent {...args} />
  </div>
)

Baseline.args = {
  label: 'United States',
  percentage: 44.86,
  risk: 'Baseline',
  cases: 179615165,
  newCases: 123,
}
