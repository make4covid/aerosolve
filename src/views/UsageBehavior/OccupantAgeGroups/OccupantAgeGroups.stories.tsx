import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { OccupantAgeGroups as OccupantAgeGroupsComponent } from './OccupantAgeGroups'

export default {
  title: 'Aerosolve/Views/Usage & Behavior/Occupant Age Groups',
  component: OccupantAgeGroupsComponent,
}

export const OccupantAgeGroups: Story<StepViewProps> = (args) => (
  <OccupantAgeGroupsComponent {...args} />
)
