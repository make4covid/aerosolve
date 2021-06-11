import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { PhysicalActivity } from './PhysicalActivity'

export default {
  title: 'Aerosolve/Atoms/UsageAndBehavior/PhysicalActivity',
  component: PhysicalActivity,
}

const Template: Story<StepViewProps> = (args) => <PhysicalActivity {...args} />

export const Activity = Template.bind({})

// Activity.args = {
//   title: '08/Physical Activity',
//   question: 'What types of physical activities are typical in the space?',
//   recommendation: 'This space is safe for 30 people for 6 out of 8 target hours',
//   hours: 8, //Should update this from Promise call function
//   description:
//     'Challenging physical activity increases breathing rates, which means more aerosols are reletion',
// }

// Activity.parameters = {
//   design: {
//     type: 'figma',
//     url:
//       'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
//   },
// }
