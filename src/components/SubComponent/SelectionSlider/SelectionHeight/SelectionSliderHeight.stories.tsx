import { Story } from '@storybook/react';
import { SelectionSliderHeight } from './SelectionSliderHeight';
import {Slider} from "./SelectionSliderHeight"

export default {
    title: 'Aerosolve/Atoms/SubComponent/SelectionSliderHeight.tsx',
    component: SelectionSliderHeight
}

const Template: Story<Slider> = (args) => <SelectionSliderHeight {...args} />;

export const Default = Template.bind({});

Default.args = {
    header: "SelectionSlider"
}
Default.parameters = {
    design: {
        type: 'figma',
        url: '',
    }
}
