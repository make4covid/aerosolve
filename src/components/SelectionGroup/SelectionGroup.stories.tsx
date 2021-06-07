import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { SelectionGroup, SelectionGroupProps } from './SelectionGroup';

import Kids from 'assets/images/kids.png';

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
    img: Kids,
  },
  {
    title: 'Card 2',
    description: 'Description 2',
    img: Kids,
  },
  {
    title: 'Card 3',
    description: 'Description 2',
    img: Kids,
  },
  {
    title: 'Card 4',
    description: 'Description 2',
    img: Kids,
  },
];

const Template: Story<SelectionGroupProps> = (args) => {
  const [selected, setSelected] = useState([] as number[]);

  return (
    <div>
      <SelectionGroup {...args} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  options,
  multi: true,
  cardCol: false,
};

SingleSelect.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=2437%3A8028',
  },
};
