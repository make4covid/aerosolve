import { Story } from '@storybook/react';
import { AerosolveLogo } from './AerosolveLogo';

export default {
  title: 'Aerosolve/AerosolveLogo',
  component: AerosolveLogo,
};

const Template: Story<{}> = (args) => (
  <div className="w-96">
    <AerosolveLogo {...args} />
  </div>
);

export const Default = Template.bind({});
