import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SelectionCard, BoxProps } from './SelectionCard';

import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Aerosolve/Atoms/Selection Card',
  component: SelectionCard,
  decorators: [withDesign],
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <div className="w-1/3">
    <SelectionCard {...args} title="A Title" description="A Description" />
  </div>
);

export const PlainUnselected = Template.bind({});
export const PlainSelected = Template.bind({});
PlainUnselected.args = { selected: false };
PlainSelected.args = { selected: true };

export const RowUnselected = Template.bind({});
export const RowSelected = Template.bind({});
RowUnselected.args = { selected: false, img: 'source' };
RowSelected.args = { selected: true, img: 'source' };

export const ColUnselected = Template.bind({});
export const ColSelected = Template.bind({});
ColUnselected.args = { selected: false, img: 'source', column: true };
ColSelected.args = { selected: true, img: 'source', column: true };
