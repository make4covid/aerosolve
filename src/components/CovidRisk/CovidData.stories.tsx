import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CovidData as CovidDataComponent, CovidDataProps } from './CovidData'

export default {
  title: 'Aerosolve/Components/Covid Data',
  component: CovidDataComponent,
  decorators: [withDesign],
}

export const CovidData: Story<CovidDataProps> = (args) => <CovidDataComponent {...args} />

CovidData.args = {
  state: 'Colorado',
  cases: 589128,
  risk: 'Low',
  deaths: 8971,
  newCases: 479,
  newDeaths: 6,
  vaccinationRate: 45.5,
}

CovidData.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=3538%3A37',
  },
}
