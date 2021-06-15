import { Story } from '@storybook/react'
import { InputLocation, InputLocationProps } from './InputLocation'

export default {
  title: 'Aerosolve/Remove/Location/InputLocation',
  component: InputLocation,
}

const Template: Story<InputLocationProps> = (args) => <InputLocation {...args} />

export const Default = Template.bind({})

Default.args = {
  header: 'Activity',
  location: 'CO,USA',
}

Default.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
}
