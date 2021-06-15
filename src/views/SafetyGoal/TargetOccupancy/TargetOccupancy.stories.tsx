import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { TargetOccupancy as TargetOccupancyComponent } from './TargetOccupancy'

export default {
  title: 'Aerosolve/Views/Safety Goal/Target Occupancy',
  component: TargetOccupancyComponent,
}

export const TargetOccupancy: Story<StepViewProps> = (args) => (
  <TargetOccupancyComponent {...args} />
)

// export const Default = Template.bind({})

// Activity.args = {
//   title: '01/Target Occupancy',
//   question: 'What is the target occupancy for this space',
//   recommendation: 'This space is safe for 30 people for 6 out of 8 target hours',
//   hours: 8,
//   description: '',
// }

// Activity.parameters = {
//   design: {
//     type: 'figma',
//     url:
//       'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
//   },
// }
