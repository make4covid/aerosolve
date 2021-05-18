import { Story } from '@storybook/react';
import {AerosolveLogo} from "./AerosolveLogo";


export default {
    title: 'Aerosolve/Atoms/SubComponent/AerosolveLogo',
    component: AerosolveLogo
}


const Template: Story<{}> = (args) => <AerosolveLogo {...args} />;

export const Default = Template.bind({});