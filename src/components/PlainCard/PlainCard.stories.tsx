import React from 'react'
import { Story, Meta } from '@storybook/react'

import { PlainCard, CardOptions, CardProps } from './PlainCard'

import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Aerosolve/Refactor/Plain Card',
  component: PlainCard,
  decorators: [withDesign],
} as Meta

const Template: Story<CardOptions & CardProps> = (args) => (
  <div>
    {args.selectionHours && (
      <div className="w-full h-64 bg-gray-300">
        <PlainCard
          {...args}
          title={'Target Number of Hours'}
          description={
            'Target number of occupants intended for\n the space to be occupied in a single\nsetting.'
          }
        />
      </div>
    )}
    {args.occupants && (
      <div className="w-full bg-gray-300 h-96">
        <PlainCard
          {...args}
          title={'Target Number of Occupants\n'}
          description={
            'Target number of occupants\nintended for the space to be\noccupied in a single setting.\n'
          }
        />
      </div>
    )}
  </div>
)

export const PlainCardOccupant = Template.bind({})
export const PlainCardHour = Template.bind({})

PlainCardOccupant.args = {
  occupants: true,
}
PlainCardHour.args = {
  selectionHours: true,
}
