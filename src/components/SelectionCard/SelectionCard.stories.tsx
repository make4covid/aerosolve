import React from 'react'
import { Story, Meta } from '@storybook/react'

import Kids from 'assets/images/kids.svg'

import { SelectionCard, SelectionCardProps, SelectionOptions } from './SelectionCard'

import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Aerosolve/Components/Selection Card',
  component: SelectionCard,
  decorators: [withDesign],
} as Meta

const Template: Story<SelectionCardProps & SelectionOptions> = (args) => (
  <div className="w-1/3">
    <SelectionCard {...args} title="A Title" description="A Description" />
  </div>
)

export const PlainUnselected = Template.bind({})
export const PlainSelected = Template.bind({})
PlainUnselected.args = { selected: false }
PlainSelected.args = { selected: true }

export const RowUnselected = Template.bind({})
export const RowSelected = Template.bind({})
RowUnselected.args = { selected: false, img: Kids, column: false }
RowSelected.args = { selected: true, img: Kids, column: false }

export const ColUnselected = Template.bind({})
export const ColSelected = Template.bind({})
ColUnselected.args = { selected: false, img: Kids, column: true }
ColSelected.args = { selected: true, img: Kids, column: true }
