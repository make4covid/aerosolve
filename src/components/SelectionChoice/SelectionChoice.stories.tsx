import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { SelectionChoice, SelectionChoiceProps } from './SelectionChoice'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Aerosolve/Components/Selection Choice ',
  component: SelectionChoice,
  decorators: [withDesign],
} as Meta

const Template: Story<SelectionChoiceProps> = (args) => {
  const [selected, setSelected] = useState(args.options[0])
  console.log(selected)
  return (
    <div className="w-11/12 mx-auto">
      <SelectionChoice {...args} selected={selected} onSelect={setSelected} />
    </div>
  )
}

export const title = Template.bind({})
title.args = {
  options: ['None', 'Poor', 'Average', 'Good', 'Excellent'],
  title: 'Ventilation',
  description: 'Outdoor air supply rate',
}

export const description = Template.bind({})
description.args = {
  options: ['None', 'Window AC', 'Residential HVAC', 'Industrial HVAC', 'HEPA'],
  title: 'Filtration System',
  description: 'Type of filtration provided',
}
