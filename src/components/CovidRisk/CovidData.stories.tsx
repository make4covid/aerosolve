import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CovidData as CovidDataComponent, CovidDataProps } from './CovidData'

export default {
  title: 'Aerosolve/Components/Covid Data',
  component: CovidDataComponent,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=3552%3A30',
    },
  },
}

export const Template: Story<CovidDataProps> = (args) => <CovidDataComponent {...args} />
export const LowRisk = Template.bind({})
export const MediumRisk = Template.bind({})
export const HighRisk = Template.bind({})

const args: CovidDataProps = {
  state: 'Colorado',
  cases: 589128,
  risk: 'Low',
  deaths: 8971,
  newCases: 479,
  newDeaths: 6,
  vaccinationRate: 45.5,
}

LowRisk.args = { ...args, risk: 'Low' }
MediumRisk.args = { ...args, risk: 'Medium' }
HighRisk.args = { ...args, risk: 'High' }
