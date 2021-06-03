import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { SelectionGroup, SelectionGroupProps } from './SelectionGroup';

import { withDesign } from 'storybook-addon-designs';
import { SelectionOptions } from 'components/SelectionCard/SelectionCard';

export default {
  title: 'Aerosolve/Selection Group',
  component: SelectionGroup,
} as Meta;

const options: SelectionOptions[] = [
  {
    title: 'Card 1',
    description: 'Description 1',
  },
  {
    title: 'Card 2',
    description: 'Description 2',
  },
];

const Template: Story<SelectionGroupProps> = (args) => {
  const [selected, setSelected] = useState([1, 2] as number[]);

  return (
    <div>
      <SelectionGroup
        selected={selected}
        onSelect={setSelected}
        options={options}
      />
    </div>
  );
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {};
