import { Story } from '@storybook/react'
import React from "react";
import {DropdownSelector,DropdownSelectorProps} from "./DropdownSelector";


export default {
    title: 'Aerosolve/Components/Dropdown-Selector',
    component: DropdownSelector,
}

const Template: Story<DropdownSelectorProps> = (args) =>
    <div className="max-h-screen max-w-screen flex">
        <div className="m-auto w-48 h-56">
            <DropdownSelector {...args}/>
        </div>

    </div>
export const Default = Template.bind({})

Default.args = {
    data:["Colorado","Texas","NewYork","Wyoming","Arkansas","Connecticut","Delaware","Florida","Idaho","Illinois","Alabama","Arizona","California"],
    placeholder: "State"
}

Default.parameters = {
    design: {
        type: 'figma',
        url:
            'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    },
}
