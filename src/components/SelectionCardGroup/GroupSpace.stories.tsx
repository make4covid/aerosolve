import { Story } from '@storybook/react';
import { GroupSpace, CardGroup } from './GroupSpace';

export default {
  title: 'Aerosolve/Review & Refactor/SelectionCardGroupSpace',
  component: GroupSpace,
};

const Template: Story<CardGroup> = (args) => <GroupSpace {...args} />;

export const Space = Template.bind({});

Space.args = {
  header: 'Space',
  items: [
    {
      value: 'Living Room',
      risk: 'Low Risk',
      active: true,
      route: 'test',
      completed: true,
    },
    {
      value: 'Classroom',
      risk: 'High Risk',
      active: false,
      route: 'test',
      completed: false,
    },
    {
      value: 'Classroom1',
      risk: 'Medium Risk',
      active: false,
      route: 'test',
      completed: false,
    },
    {
      value: 'Classroom2',
      risk: 'High Risk',
      active: false,
      route: 'test',
      completed: false,
    },
  ],
};

Space.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
};
