import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { SelectionGroup, SelectionGroupProps } from './SelectionGroup';

import { withDesign } from 'storybook-addon-designs';
import { SelectionOptions } from 'components/SelectionCard/SelectionCard';

export default {
  title: 'Aerosolve/Selection Group',
  component: SelectionGroup,
  decorators: [withDesign],
} as Meta;

const options: SelectionOptions[] = [
  {
    title: 'Card 1\nMultiline title',
    description: 'Description 1',
    img: 'assets/old/KidImage.png',
  },
  {
    title: 'Card 2',
    description: 'Description 2',
  },
  {
    title: 'Card 3',
    description: 'Description 2',
  },
  {
    title: 'Card 4',
    description: 'Description 2',
  },
];

const Template: Story<SelectionGroupProps> = (args) => {
  const [selected, setSelected] = useState([1, 2] as number[]);

  return (
    <div>
      <SelectionGroup
        selected={selected}
        setSelected={setSelected}
        options={options}
      />
    </div>
  );
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {};

SingleSelect.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=2437%3A8028',
  },
};
