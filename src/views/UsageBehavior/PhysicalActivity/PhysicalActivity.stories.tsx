import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { PhysicalActivity as PhysicalActivityComponent } from './PhysicalActivity'

export default {
  title: 'Aerosolve/Views/Usage & Behavior/Physical Activity',
  component: PhysicalActivityComponent,
}

export const PhysicalActivity: Story<StepViewProps> = (args) => (
  <PhysicalActivityComponent {...args} />
)
