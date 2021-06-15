import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { SelectionOption } from './SelectionChoiceItem/SelectionChoiceItem'
import { SelectionChoice, SelectionChoiceOption, SelectionChoiceProps } from './SelectionChoice'
import { withDesign } from 'storybook-addon-designs'

const options: SelectionOption[] = [
  {
    button_description: 'Bla1',
  },
  {
    button_description: 'Bla2',
  },
  {
    button_description: 'Bla3',
  },
  {
    button_description: 'Bla4',
  },
  {
    button_description: 'Bla5',
  },
  {
    button_description: 'Bla6',
  },
]

export default {
  title: 'Aerosolve/Components/Selection Choice ',
  component: SelectionChoice,
  decorators: [withDesign],
} as Meta

const Template: Story<SelectionChoiceOption & SelectionChoiceProps> = (args) => {
  const [selectedArray, setSelectedArray] = useState(
    Array.from(Array(args.options.length).keys()).map(() => new Array(2).fill(-1)) as number[][]
  )
  return (
    <div className="w-screen h-32 bg-gray-200 rounded-2xl">
      <SelectionChoice
        {...args}
        selectedArray={selectedArray}
        setSelectedArray={setSelectedArray}
      />
    </div>
  )
}

export const PlainUnselected = Template.bind({})
PlainUnselected.args = {
  options,
  title: 'Ventilation ',
  description: 'Outdoor air supply rate/ Outdoor ACH',
}
