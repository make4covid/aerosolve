import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { SelectionOption } from './SelectionChoiceItem/SelectionChoiceItem'
import { SelectionChoice, SelectionChoiceOption, SelectionChoiceProps } from './SelectionChoice'
import { withDesign } from 'storybook-addon-designs'

const options: SelectionOption[] = [
  {
    button_description: '',
  },
  {
    button_description: 'Mostly No',
  },
  {
    button_description: 'Average',
  },
  {
    button_description: 'Mostly Yes',
  }
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
      <div className="w-3/5 h-3/5 bg-gray-200 rounded-2xl">
        <SelectionChoice
            {...args}
            selectedArray={selectedArray}
            setSelectedArray={setSelectedArray}


        />
      </div>
  )
}

export const title = Template.bind({})
title.args = {
  options,
  title: 'Occupants are wearing Masks\nthat completely covering their\nnoise and mounth',
  totalCols:5,
  leftCol:2,
  rightCol:3,
  boxCols:options.length
}

export const description = Template.bind({})
description.args = {
  options,
  title: 'Ventilation ',
  totalCols:5,
  leftCol:2,
  rightCol:3,
  boxCols:options.length

}