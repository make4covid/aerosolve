import React from 'react';
import { Story, Meta } from '@storybook/react';

import Kids from 'assets/images/kids.png';

import {
  SelectionCard,
  SelectionCardProps,
  SelectionOptions,
} from './SelectionCard';

import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Aerosolve/Atoms/Selection Card',
  component: SelectionCard,
  decorators: [withDesign],
} as Meta;

const Template: Story<SelectionCardProps & SelectionOptions> = (args) => (
  <div className="w-1/3">
    <SelectionCard {...args} title="A Title" description="A Description" />
  </div>
);

export const PlainUnselected = Template.bind({});
export const PlainSelected = Template.bind({});
PlainUnselected.args = { selected: false }; //Fit for Type of Space
PlainSelected.args = { selected: true };    //Fit for Type of Space

export const RowUnselected = Template.bind({});
export const RowSelected = Template.bind({});
RowUnselected.args = { selected: false, img: Kids, column: false };
RowSelected.args = { selected: true, img: Kids, column: false };

export const ColUnselected = Template.bind({});
export const ColSelected = Template.bind({});
ColUnselected.args = { selected: false, img: Kids, column: true };  //Fit for Occupant Age Groups
ColSelected.args = { selected: true, img: Kids, column: true };     //Fit for Occupant Age Groups

export const RowNoDescriptionUnSelected = Template.bind({})
export const RowNoDescriptionSelected = Template.bind({})
RowNoDescriptionUnSelected.args = { selected: false, img: Kids, column: false }; //Fit for Vocal activity
RowNoDescriptionSelected.args = { selected: true, img: Kids, column: false};    //Fit for Vocal activity