import { Story } from '@storybook/react'
import React, { useState } from 'react'
import { SelectionPercentageGroups as SelectionPercentageGroupsComponent , SelectionPercentageGroupsProps } from './SelectionPercentageGroup'
import {SelectionPercentageProps} from "components/SelectionPercentage/SelectionPercentage"
export default {
    title: 'Aerosolve/Components/SelectionPercentageGroups',
    component: SelectionPercentageGroupsComponent,
}

const options: SelectionPercentageProps[] =[
    {
        title: "Children/ Teens\n0-15 Years Old",
        rating: "Lower Risk",
        percentage: 40,
        max:10,
        multi: true
    },
    {
        title: "Adults\n16-63 Years Old",
        rating: "Medium Risk",
        percentage: 40,
        max:10,
        multi: true
    },
    {
        title: "Seniors\n64+ Years Old",
        rating: "Higher Risk",
        percentage: 20,
        max:10,
        multi: true
    }
]

const Template: Story<SelectionPercentageGroupsProps> = (args) => {

    return (
        <div className="max-w-screen max-h-screen">
            <SelectionPercentageGroupsComponent {...args}  />
        </div>
    )
}

export const selectionPercentageGroups = Template.bind({})
selectionPercentageGroups.args = {
   options
}
