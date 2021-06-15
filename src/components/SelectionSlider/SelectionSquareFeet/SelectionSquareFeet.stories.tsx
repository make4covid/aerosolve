import { Story } from '@storybook/react';
import {SelectionSquareFeetProps, SelectionSquareFeet} from "./SelectionSquareFeet";

export default {
    title: 'Aerosolve/Components/SelectionSlider/SelectionSquareFeet',
    component: SelectionSquareFeet,
};

const Template: Story<SelectionSquareFeetProps> = (args) =>
    <div className="flex w-full h-48 bg-gray-400">
        <div className="m-auto w-3/5">
            <SelectionSquareFeet {...args} />
        </div>
    </div>


export const SquareFeetSlider = Template.bind({})
SquareFeetSlider.args = {
    value:100,
    min:100,
    max:10000,
    unit: "sq.feet",
    arrayValue: [100,500,1000,5000,10000,15000],
    description: ["Small\nBedroom","Living\nRoom","School\nClassroom","Basketball\nCourt","Office\nSpace","Large\nSpace"]
};