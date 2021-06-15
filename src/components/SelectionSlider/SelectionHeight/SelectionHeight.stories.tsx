import { Story } from '@storybook/react';
import { SelectionHeightProps,SelectionHeight } from './SelectionHeight';

export default {
    title: 'Aerosolve/Components/SelectionSlider/SelectionHeight',
    component: SelectionHeight,
};

const Template: Story<SelectionHeightProps> = (args) =>
    <div className="flex w-full h-48 bg-gray-400">
        <div className="m-auto w-3/5">
            <SelectionHeight {...args} />
        </div>
    </div>

export const SelectionHeightSlider= Template.bind({});

SelectionHeightSlider.args = {
    value:0,
    min:8,
    max:18,
    unit: "feet",
    arrayValue:[7,8,9,10,11,12,13,14,15,16,17,18,19]
};
