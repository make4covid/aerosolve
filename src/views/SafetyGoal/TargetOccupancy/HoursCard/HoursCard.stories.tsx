import { Story } from '@storybook/react'
import { HoursCard, HoursCardProps } from './HoursCard'

export default {
  title: 'Aerosolve/Atoms/SafetyGoal/HoursCard',
  component: HoursCard,
}

const Template: Story<HoursCardProps> = (args) => <HoursCard {...args} />

export const HoursCards = Template.bind({})

HoursCards.args = {
  header: 'OccupantCard',
  hours: 50,
}

HoursCards.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
}
