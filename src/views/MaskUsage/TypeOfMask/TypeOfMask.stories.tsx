import { Story } from '@storybook/react';
import {TypeOfMask,TypeOfMaskProps} from "./TypeOfMask";

export default {
    title: 'Aerosolve/Atoms/MaskUsage/TypeOfMask',
    component: TypeOfMask
}

const Template: Story<TypeOfMaskProps> = (args) => <TypeOfMask {...args} />;

export const Activity = Template.bind({});



Activity.args = {
    title:"10/Mask Fit",
    question:"Quick survey of mask compliance among the occupants",
    recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
    hours:8, //Should update this from Promise call function
    description:"Wearing masks correctly is an effective way to prevent the aerosol transmission of coronavirus"
}


Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
