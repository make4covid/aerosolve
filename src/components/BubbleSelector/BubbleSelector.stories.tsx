import { Story } from '@storybook/react';
import {BubbleSelector} from "./BubbleSelector";


export default {
    title: 'Aerosolve/Atoms/SubComponent/BubbleSelector',
    component: BubbleSelector
}


const Template: Story<{}> = (args) => <BubbleSelector {...args} />;

export const Default = Template.bind({});