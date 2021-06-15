import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { TypeOfMask as TypeOfMaskComponent } from './TypeOfMask'

export default {
  title: 'Aerosolve/Views/Mask Usage/Type Of Mask',
  component: TypeOfMaskComponent,
}

export const TypeOfMask: Story<StepViewProps> = (args) => <TypeOfMaskComponent {...args} />
