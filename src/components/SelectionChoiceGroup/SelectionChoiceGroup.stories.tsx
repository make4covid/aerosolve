import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { withDesign } from 'storybook-addon-designs'
import { SelectionChoiceGroup } from './SelectionChoiceGroup'
import { SelectionChoiceGroupOptions } from './SelectionChoiceGroup'
import { SelectionOption } from '../SelectionChoice/SelectionChoiceItem/SelectionChoiceItem'
import { SelectionChoiceOption } from '../SelectionChoice/SelectionChoice'

export default {
  title: 'Aerosolve/Compositions/Selection Choice Group',
  component: SelectionChoiceGroup,
  decorators: [withDesign],
} as Meta

let options1: SelectionOption[] = [
  {
    button_description: 'Poor',
  },
  {
    button_description: 'Average',
  },
  {
    button_description: 'Good',
  },
]

let options2: SelectionOption[] = [
  {
    button_description: 'None',
  },
  {
    button_description: 'Window A/C',
  },
  {
    button_description: 'Residential\nHVAC',
  },
  {
    button_description: 'Industrial\nHVAC',
  },
  {
    button_description: 'HEPA',
  },
]

let options3: SelectionOption[] = [
  {
    button_description: 'Very Dry',
  },
  {
    button_description: 'Dry',
  },
  {
    button_description: 'Average',
  },
  {
    button_description: 'Humid',
  },
]
let options: SelectionChoiceOption[] = [
  {
    options: options1,
    title: 'Ventilation',
    description: 'Outdoor air supply rate/\nOutdoor ACH',
  },
  {
    options: options2,
    title: 'Filtration System',
    description: 'The efficiency of filtration system',
  },
  {
    options: options1,
    title: 'Recirculation Rate',
    description: 'Indoor air exhaust rate/\nIndoor ACH',
  },
  {
    options: options3,
    title: 'Average Humidity',
    description: 'The average outdoor relative air humidity R/H %',
  },
]

const Template: Story<SelectionChoiceGroupOptions> = (args) => {
  return (
    <div className="w-screen h-screen">
      <SelectionChoiceGroup {...args} />
    </div>
  )
}

export const PlainUnselected = Template.bind({})
PlainUnselected.args = {
  options,
}
