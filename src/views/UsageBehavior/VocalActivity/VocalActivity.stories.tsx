import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { VocalActivity as VocalActivityComponent } from './VocalActivity'

export default {
  title: 'Aerosolve/Views/Usage & Behavior/Vocal Activity',
  component: VocalActivityComponent,
}

export const VocalActivity: Story<StepViewProps> = (args) => <VocalActivityComponent {...args} />
