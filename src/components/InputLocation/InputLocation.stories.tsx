import { Story } from '@storybook/react'
import { InputLocation, InputLocationProps } from './InputLocation'

export default {
  title: 'Aerosolve/Components/Input Location',
  component: InputLocation,
}

const Template: Story<InputLocationProps> = (args) =>
    <div className="container w-full max-w-5xl px-12 py-5 mx-auto overflow-scroll min-w-2xl">
      <InputLocation {...args} />
    </div>

export const Default = Template.bind({})

Default.args = {

}

Default.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
}
