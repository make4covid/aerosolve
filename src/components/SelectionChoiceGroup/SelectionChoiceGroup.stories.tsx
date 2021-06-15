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
  {
    button_description: '',
  },

  {
    button_description: '',
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
  {
    button_description: '',
  },
]
let options: SelectionChoiceOption[] = [
  {
    options: options1,
    title: 'Ventilation',
    description: 'Outdoor air supply rate/\nOutdoor ACH',
    totalCols:5,
    leftCol:1,
    rightCol:4,
    boxCols:options1.length
  },
  {
    options: options2,
    title: 'Filtration System',
    description: 'The efficiency of filtration system',
    totalCols:5,
    leftCol:1,
    rightCol:4,
    boxCols:options2.length
  },
  {
    options: options1,
    title: 'Recirculation Rate',
    description: 'Indoor air exhaust rate/\nIndoor ACH',
    totalCols:5,
    leftCol:1,
    rightCol:4,
    boxCols:options1.length
  },
  {
    options: options3,
    title: 'Average Humidity',
    description: 'The average outdoor relative air humidity R/H %',
    totalCols:5,
    leftCol:1,
    rightCol:4,
    boxCols:options3.length
  },
]


let subOptions: SelectionOption[] = [
  {
    button_description: ""
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

let optionTitle: SelectionChoiceOption[] = [
  {
    options:subOptions,
    title: 'Occupants are wearing Masks\nthat completely covering their\nnoise and mounth',
    totalCols:5,
    leftCol:2,
    rightCol:3,
    boxCols:options.length
  },
  {
    options:subOptions,
    title: 'Occupants are wearing Masks\nthat completely covering their\nnoise and mounth',
    totalCols:5,
    leftCol:2,
    rightCol:3,
    boxCols:options.length
  },
  {
    options:subOptions,
    title: 'Occupants are wearing Masks\nthat completely covering their\nnoise and mounth',
    totalCols:5,
    leftCol:2,
    rightCol:3,
    boxCols:options.length
  }
]

const Template: Story<SelectionChoiceGroupOptions> = (args) => {
  return (
      <div className="w-2/5 h-2/5 ">
        <SelectionChoiceGroup {...args} />
      </div>
  )
}

export const Description = Template.bind({})
Description.args = {
  options,
}


export const Title = Template.bind({})
Title.args = {
  options:optionTitle,
  noDescription:true
}