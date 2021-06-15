import React from 'react'
import { Story, Meta } from '@storybook/react'

import Kids from 'assets/images/kids.png'

import { ValueIndicator as ValueIndicatorComponent, ValueIndicatorProps } from './ValueIndicator'

import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Aerosolve/Components/Value Indicator',
  component: ValueIndicatorComponent,
  decorators: [withDesign],
} as Meta

export const ValueIndicator: Story<ValueIndicatorProps> = (args) => (
  <ValueIndicatorComponent {...args} />
)
