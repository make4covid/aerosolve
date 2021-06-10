import { Story } from '@storybook/react'
import { ProgressIndicator, ProgressIndicatorProps } from './ProgressIndicator'

export default {
  title: 'Aerosolve/Components/ProgressIndicator',
  component: ProgressIndicator,
}

const Template: Story<{}> = (args) => <ProgressIndicator {...(args as ProgressIndicatorProps)} />

export const OccupantCard = Template.bind({})

OccupantCard.args = {
  value: 6,
  outOf: 8,
  people: 30,
}

OccupantCard.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
}
