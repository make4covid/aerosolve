import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { CeilingHeight as CeilingHeightComponent } from './CeilingHeight'

export default {
  title: 'Aerosolve/Views/Space Information/Ceiling Height',
  component: CeilingHeightComponent,
}

export const CeilingHeight: Story<StepViewProps> = (args) => <CeilingHeightComponent {...args} />

// Activity.args = {
//   title: '05/Ceiling Height',
//   question: 'About how tall, on average, is the ceiling in the space?',
//   recommendation: 'This space is safe for 30 people for 6 out of 8 target hours',
//   hours: 8, //Should update this from Promise call function
//   description:
//     'Ceiling height provides accurate data to the calculation of room volume in air exchange rate',
// }

// Activity.parameters = {
//   design: {
//     type: 'figma',
//     url:
//       'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
//   },
// }
