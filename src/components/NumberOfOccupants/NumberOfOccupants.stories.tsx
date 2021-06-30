import { Story } from '@storybook/react'
import { NumberOfOccupantsProps } from 'components/NumberOfOccupants/NumberOfOccupants'
import { NumberOfOccupants } from './NumberOfOccupants'
import React from 'react'

export default {
  title: 'Aerosolve/Components/Number Of Occupants',
  component: NumberOfOccupants,
}

const Template: Story<NumberOfOccupantsProps> = (args) => (
  <div className="w-screen h-70">
    <NumberOfOccupants {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  header: 'OccupantCard',
  value: 50,
  lineBreak: 10,
}
