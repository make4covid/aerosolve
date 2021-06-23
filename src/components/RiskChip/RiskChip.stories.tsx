import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { RiskChip as RiskChipComponent, RiskChipProps } from './RiskChip'

export default {
  title: 'Aerosolve/Components/RiskChip',
  component: RiskChipComponent,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}

export const RiskChip: Story<RiskChipProps> = (args) => <RiskChipComponent {...args} />

RiskChip.args = {}
