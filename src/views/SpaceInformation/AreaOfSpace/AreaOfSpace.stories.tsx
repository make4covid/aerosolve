import { Story } from '@storybook/react';
import { AreOfSpace, AreaOfSpaceProps } from './AreaOfSpace';
import { PageHeaderProps } from 'components/PageHeader/PageHeader';

export default {
  title: 'Aerosolve/Atoms/SpaceInformation/AreOfSpace',
  component: AreOfSpace,
};

const Template: Story<AreaOfSpaceProps> = (args) => <AreOfSpace {...args} />;

export const Activity = Template.bind({});

Activity.args = {
  title: '04/Are of Space',
  question: "About how large is the space you're evaluation?",
  recommendation:
    'This space is safe for 30 people for 6 out of 8 target hours',
  hours: 8, //Should update this from Promise call function
  description:
    'Why understading the room type can help determine the risk in viral transmission',
};

Activity.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
};
