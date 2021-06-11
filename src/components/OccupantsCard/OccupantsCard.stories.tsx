import { Story } from '@storybook/react';
import { OccupantsCard, OccupantsCardProps } from './OccupantsCard';

export default {
  title: 'Aerosolve/Review & Refactor/OccupantsCard',
  component: OccupantsCard,
};

const Template: Story<OccupantsCardProps> = (args) => (
  <OccupantsCard {...args} />
);

export const OccupantCard = Template.bind({});

OccupantCard.args = {
  header: 'OccupantCard',
  occupant: 50,
};

OccupantCard.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
};
