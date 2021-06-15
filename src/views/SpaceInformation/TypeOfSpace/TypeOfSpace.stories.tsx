import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { TypeOfSpace as TypeOfSpaceComponent } from './TypeOfSpace'

export default {
  title: 'Aerosolve/Views/Space Information/Type Of Space',
  component: TypeOfSpaceComponent,
}

export const TypeOfSpace: Story<StepViewProps> = (args) => <TypeOfSpaceComponent {...args} />
