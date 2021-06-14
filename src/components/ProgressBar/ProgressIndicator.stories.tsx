import { Story } from '@storybook/react'
import { ProgressIndicator, ProgressIndicatorProps } from './ProgressIndicator'

export default {
  title: 'Aerosolve/Components/Progress Indicator',
  component: ProgressIndicator,
}

const Template: Story<{}> = (args) => <ProgressIndicator {...(args as ProgressIndicatorProps)} />

export const BelowTarget = Template.bind({})
export const AtTarget = Template.bind({})
export const AboveTarget = Template.bind({})

BelowTarget.args = {
  value: 6,
  outOf: 8,
  people: 30,
}

AtTarget.args = {
  value: 8,
  outOf: 8,
  people: 30,
}
AboveTarget.args = {
  value: 10,
  outOf: 8,
  people: 30,
}

BelowTarget.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
}
