import { Story } from '@storybook/react';
import {MaskFit,MaskFitProps} from "./MaskFit";

export default {
    title: 'Aerosolve/Pages/MaskUsage/MaskFit',
    component: MaskFit
}

const Template: Story<MaskFitProps> = (args) => <MaskFit {...args} />;

export const Activity = Template.bind({});



Activity.args = {
    title:"09/Mask Types",
    question:"What type of masks are worn by most occupants within the space?",
    recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
    hours:8, //Should update this from Promise call function
    description:"Masks are the most important factor in keeping your space safe and preventing virus tranmission between occupants"
}


Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
