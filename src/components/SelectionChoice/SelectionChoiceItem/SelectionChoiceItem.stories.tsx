import React from 'react';
import { Story, Meta } from '@storybook/react';

import Kids from 'assets/images/kids.png';

import {
    SelectionOption,
    SelectionChoiceProps, SelectionChoiceItem
} from './SelectionChoiceItem';

import { withDesign } from 'storybook-addon-designs';

export default {
    title: 'Aerosolve/Atoms/Selection Choice Item',
    component: SelectionChoiceItem,
    decorators: [withDesign],
} as Meta;

const Template: Story<SelectionChoiceProps & SelectionOption> = (args) => (
    <div className="w-screen h-screen bg-gray-200">
        <div className="flex m-auto">
            <SelectionChoiceItem {...args} />
        </div>
    </div>
);

export const PlainUnselected = Template.bind({});
export const PlainSelected = Template.bind({});
PlainUnselected.args = { selected: false, button_description: "Poor" };
PlainSelected.args = { selected: true, button_description: "Average" };
