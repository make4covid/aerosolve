import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CovidData1_1 as CovidDataComponent, CovidDataProps } from './CovidData1_1'

export default {
    title: 'Aerosolve/Components/Covid Data 1.1',
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

const Template: Story<CovidDataProps> = (args) =>
    <div className="max-w-screen h-96">
        <CovidDataComponent {...args} />
    </div>
export const CovidData = Template.bind({})


const args: CovidDataProps = {

    country: "USA",
    country_risk:"Low",
    state: 'Colorado',
    county: 'Denver',
    country_cases: 0,
    country_newCases: 0,
    country_deaths: 0,
    country_newDeaths: 0,
    country_vaccinationRate: 0,

    state_cases: 0,
    state_risk:"Low",
    state_newCases: 0,
    state_deaths: 0,
    state_newDeaths: 0,
    state_vaccinationRate: 0,

    county_cases: 0,
    county_risk: "High",
    county_newCases: 0,
    county_deaths: 0,
    county_newDeaths: 0,
    county_vaccinationRate: 0

}

CovidData.args = { ...args}

