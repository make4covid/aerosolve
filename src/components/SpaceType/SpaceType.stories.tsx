import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SpaceType as SpaceTypeComponent, SpaceTypeProps } from './SpaceType'

import Airplane from 'assets/models/airplane.png'
import Restaraunt from 'assets/models/restaraunt.png'
import Livingroom from 'assets/models/livingroom.png'

export default {
  title: 'Aerosolve/Components/Space Type',
  component: SpaceTypeComponent,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=3576%3A30',
    },
  },
}

const Template: Story<SpaceTypeProps> = (args) => <SpaceTypeComponent {...args} />
export const LowRisk = Template.bind({})
export const MediumRisk = Template.bind({})
export const HighRisk = Template.bind({})

LowRisk.args = {
  img: Livingroom,
  label: 'Livingroom',
  risk: 'Low',
}
MediumRisk.args = {
  img: Restaraunt,
  label: 'Restaraunt',
  risk: 'Medium',
}
HighRisk.args = {
  img: Airplane,
  label: 'Commercial Airliner',
  risk: 'High',
}
