import React from 'react';
import { Story, Meta } from '@storybook/react';

import Kids from 'assets/images/kids.png';

import {
    MainCard,
    SelectionOptions,
} from './MainCard';

import { withDesign } from 'storybook-addon-designs';

export default {
    title: 'Aerosolve/Atoms/Main Card',
    component: MainCard,
    decorators: [withDesign],
} as Meta;

const Template: Story< SelectionOptions> = (args) => (
    <div className="w-1/3">
        <MainCard {...args} title="A Title" description="A Description" />
    </div>
);

export const PlainUnselected = Template.bind({});
export const PlainSelected = Template.bind({});
