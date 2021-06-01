import { Story } from '@storybook/react';
import { GroupMask, CardGroup } from './GroupMask';
import KidImage from 'assets/old/KidImage.png';
export default {
  title: 'Aerosolve/Review & Refactor/SelectionCardGroupMask',
  component: GroupMask,
};

const Template: Story<CardGroup> = (args) => <GroupMask {...args} />;

export const Mask = Template.bind({});

Mask.args = {
  header: 'Space',
  items: [
    { title: 'No Mask', description: 'Bla bla bla bla', image: KidImage },
    { title: 'Cloth', description: 'Bla bla bla bla', image: KidImage },
  ],
};

Mask.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
};
