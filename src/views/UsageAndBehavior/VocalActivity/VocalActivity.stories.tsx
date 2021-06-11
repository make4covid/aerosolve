import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { VocalActivity } from './VocalActivity'

export default {
  title: 'Aerosolve/Atoms/UsageAndBehavior/VocalActiviy',
  component: VocalActivity,
}

const Template: Story<StepViewProps> = (args) => <VocalActivity {...args} />

export const Activity = Template.bind({})

// Activity.args = {
//     title:"07/Vocal Activity",
//     question:"What types of vocal activities are typical in the space?",
//     recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
//     hours:8, //Should update this from Promise call function
//     description:""
// }

// Activity.parameters = {
//     design: {
//         type: 'figma',
//         url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
//     }
// }
