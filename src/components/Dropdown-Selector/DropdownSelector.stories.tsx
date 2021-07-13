import { Story } from '@storybook/react'
import React from 'react'
import { stateName } from 'data/state-county'
import { withDesign } from 'storybook-addon-designs'
import {
  DropdownSelector as DropdownSelectorComponent,
  DropdownSelectorProps,
} from './DropdownSelector'

export default {
  title: 'Aerosolve/Components/Dropdown Selector',
  component: DropdownSelectorComponent,
  decorators: [withDesign],
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=4162%3A10306',
  },
}

const Template: Story<DropdownSelectorProps> = (args) => (
  <div className="flex max-h-screen max-w-screen">
    <div className="w-48 h-56 m-auto">
      <DropdownSelectorComponent {...args} />
    </div>
  </div>
)

export const Enabled = Template.bind({})
export const Disabled = Template.bind({})

Enabled.args = {
  options: stateName,
  placeholder: 'State',
}

Disabled.args = {
  options: [],
  placeholder: 'County',
}
