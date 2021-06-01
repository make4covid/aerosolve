import { Story } from '@storybook/react';
import { GroupAge, CardGroup } from './GroupAge';
import KidImage from 'assets/old/KidImage.png';
export default {
  title: 'Aerosolve/Atoms/SubComponent/SelectionCardGroupAge',
  component: GroupAge,
};

const Template: Story<CardGroup> = (args) => <GroupAge {...args} />;

export const Age = Template.bind({});

Age.args = {
  header: 'Age',
  items: [
    {
      value: 'Living Room',
      age: '0 - 16 Years Old',
      risk: 'Low Risk',
      active: true,
      image: KidImage,
      route: 'test',
      completed: true,
    },
    {
      value: 'Classroom',
      age: '17 - 63 Years Old',
      risk: 'High Risk',
      active: false,
      image: KidImage,
      route: 'test',
      completed: false,
    },
    {
      value: 'Classroom1',
      age: '64+ Years Old',
      risk: 'Medium Risk',
      active: false,
      image: KidImage,
      route: 'test',
      completed: false,
    },
  ],
};

Age.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
};
