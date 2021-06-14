import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { OccupantAgeGroup } from './OccupantAgeGroups'

export default {
  title: 'Aerosolve/Atoms/UsageAndBehavior/OccupantAgeGroup',
  component: OccupantAgeGroup,
}

const Template: Story<StepViewProps> = (args) => <OccupantAgeGroup {...args} />

export const Activity = Template.bind({})

// Activity.args = {
//     title:"06/Occupant Age Groups",
//     question:"About how tall, on average, is the ceiling in the space?",
//     recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
//     hours:8, //Should update this from Promise call function
//     description:"Different age groups of people have different risk levels in the event of an aerosol infection"
// }

// Activity.parameters = {
//     design: {
//         type: 'figma',
//         url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
//     }
// }
