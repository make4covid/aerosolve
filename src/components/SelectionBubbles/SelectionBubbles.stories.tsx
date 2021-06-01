import { Story } from '@storybook/react';
import { BubbleSelector } from './SelectionBubbles';

export default {
  title: 'Aerosolve/Review & Refactor/BubbleSelector',
  component: BubbleSelector,
};

const Template: Story<{}> = (args) => <BubbleSelector {...args} />;

export const Default = Template.bind({});
