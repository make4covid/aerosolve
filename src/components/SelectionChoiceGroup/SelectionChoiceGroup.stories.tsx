import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';

import { withDesign } from 'storybook-addon-designs';
import {SelectionChoiceGroup} from "./SelectionChoiceGroup";
import {SelectionChoiceGroupOptions} from "./SelectionChoiceGroup";
import {SelectionOption} from "../SelectionChoice/SelectionChoiceItem/SelectionChoiceItem";
import {SelectionChoiceOption} from "../SelectionChoice/SelectionChoice";

export default {
    title: 'Aerosolve/Atoms/Selection Choice Group',
    component: SelectionChoiceGroup,
    decorators: [withDesign],
} as Meta;


let options1 : SelectionOption[] =[
    {
        button_description:"Bla1"
    },
    {
        button_description:"Bla2"
    },
    {
        button_description:"Bla3"
    },
    {
        button_description:"Bla4"
    },
    {
        button_description:"Bla5"
    },
    {
        button_description:"Bla6"
    },
]

let options : SelectionChoiceOption[] =[
    {
        options: options1,
        title: "Ventilation",
        description:"Bla1",
    },
    {
        options: options1,
        title: "Ventilation",
        description:"Bla1",
    },
    {
        options: options1,
        title: "Ventilation",
        description:"Bla1",
    },
    {
        options: options1,
        title: "Ventilation",
        description:"Bla1",
    }
]

const Template: Story<SelectionChoiceGroupOptions> = (args) => {

    return (
        <div className="w-screen h-screen bg-gray-200 rounded-2xl">
            <SelectionChoiceGroup {...args}/>
        </div>
    )
}

export const PlainUnselected = Template.bind({});
PlainUnselected.args={
    options
}
