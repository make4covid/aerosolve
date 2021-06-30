import { Story } from '@storybook/react'
import React, { useState } from 'react'
import { SelectionPercentage as SelectionPercentageComponent, SelectionPercentageProps } from './SelectionPercentage'

export default {
    title: 'Aerosolve/Components/SelectionPercentage',
    component: SelectionPercentageComponent,
}

const Template: Story<SelectionPercentageProps> = (args) => {

    return (
        <div className="w-5/6 px-5 py-5 m-auto bg-gray-200 rounded-lg">
            <SelectionPercentageComponent {...args}  />
        </div>
    )
}

export const selectionPercentage = Template.bind({})
selectionPercentage.args = {
    title: "Children/ Teens\n0-15 Years Old",
    rating: "Lower Risk",
    percentage: 30
}
