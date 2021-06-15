import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { MaskFit as MaskFitComponent } from './MaskFit'

export default {
  title: 'Aerosolve/Views/Mask Usage/Mask Fit',
  component: MaskFitComponent,
}

export const MaskFit: Story<StepViewProps> = (args) => <MaskFitComponent {...args} />
