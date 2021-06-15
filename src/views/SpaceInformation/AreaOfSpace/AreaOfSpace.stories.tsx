import { Story } from '@storybook/react'
import { AreaOfSpace as AreaOfSpaceComponent } from './AreaOfSpace'
import { StepViewProps } from 'data'

export default {
  title: 'Aerosolve/Views/Space Information/Area Of Space',
  component: AreaOfSpaceComponent,
}

const AreaOfSpace: Story<StepViewProps> = (args) => <AreaOfSpaceComponent {...args} />
