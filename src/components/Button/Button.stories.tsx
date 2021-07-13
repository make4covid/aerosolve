import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import {Button,ButtonProps} from "./Button";
import React from "react";

export default {
    title: 'Aerosolve/Components/Button/Button Up',
    component: Button,
    decorators: [withDesign],
    parameters: {
        design: {
            type: 'figma',
            url:
                'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=3552%3A30',
        },
    },
}

const Template: Story<ButtonProps> = (args) =>
    <div className={"w-32 h-32"}>
            <Button {...args} />
    </div>
export const ButtonUp = Template.bind({})
export const ButtonDown = Template.bind({})


ButtonUp.args = { direction:0}
ButtonDown.args = { direction:1}
