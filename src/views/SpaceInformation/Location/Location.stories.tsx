import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { Location as LocationComponent } from './Location'

export default {
  title: 'Aerosolve/Views/Space Information/Location',
  component: LocationComponent,
}

export const Location: Story<StepViewProps> = (args) => <LocationComponent {...args} />

// Activity.args = {
//   title: '02/Location',
//   question: 'Where is the occupied space located',
//   recommendation: 'This space is safe for 30 people for 6 out of 8 target hours',
//   hours: 8, //Should update this from Promise call function
//   description:
//     'Different age groups of people have different risk levels in the events of an aerosol infection',
// }

// Activity.parameters = {
//   design: {
//     type: 'figma',
//     url:
//       'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
//   },
// }
