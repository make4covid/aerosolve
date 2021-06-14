import { Story } from '@storybook/react';
import {
    NumberOfOccupantsProps,
} from 'components/NumberOfOccupants/NumberOfOccupants';
import { NumberOfOccupants } from './NumberOfOccupants';
import React from "react";

export default {
    title: 'Aerosolve/Atoms/NumberOfOccupants',
    component: NumberOfOccupants,
};

const Template: Story<NumberOfOccupantsProps> = (args) => (
    <div className="w-screen h-70">
        <NumberOfOccupants {...args} />
    </div>
);

export const NumberOfOccupantCard = Template.bind({});

NumberOfOccupantCard.args = {
    header: 'OccupantCard',
    occupant: 50,
    lineBreak: 10
};