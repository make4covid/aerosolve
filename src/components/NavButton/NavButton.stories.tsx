import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { NavButton as NavButtonComponent, NavButtonProps } from './NavButton'

export default {
  title: 'Aerosolve/Components/NavButton',
  component: NavButtonComponent,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}

const Template: Story<NavButtonProps> = (args) => <NavButtonComponent {...args} />

export const Next = Template.bind({})
export const Last = Template.bind({})
export const NextWithText = Template.bind({})
export const LastWithText = Template.bind({})

Last.args = { direction: 'last' }
NextWithText.args = { label: 'Start here' }
LastWithText.args = { direction: 'last', label: 'Back a bit' }
