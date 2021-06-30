import React from 'react'
import { Story, Meta } from '@storybook/react'

import Kids from 'assets/images/kids.png'

import { SelectionChoiceItemProps, SelectionChoiceItem } from './SelectionChoiceItem'

import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Aerosolve/Components/Selection Choice Item',
  component: SelectionChoiceItem,
  decorators: [withDesign],
} as Meta

const Template: Story<SelectionChoiceItemProps> = (args) => (
  <div className="flex w-screen h-screen">
    <div className="w-48 h-48 m-auto bg-gray-200 cursor-pointer">
      <SelectionChoiceItem {...args} />
    </div>
  </div>
)

export const PlainUnselected = Template.bind({})
export const PlainSelected = Template.bind({})
PlainUnselected.args = { selected: false, value: 'Poor' }
PlainSelected.args = { selected: true, value: 'Average' }
