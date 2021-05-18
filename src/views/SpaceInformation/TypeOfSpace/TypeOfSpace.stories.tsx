import { Story } from '@storybook/react';
import {TypeOfSpace,TypeOfSpaceProps} from "./TypeOfSpace";

export default {
    title: 'Aerosolve/Atoms/SpaceInformation/TypeOfSpace',
    component: TypeOfSpace
}


const Template: Story<TypeOfSpaceProps> = (args) => <TypeOfSpace {...args} />;

export const Activity = Template.bind({});



Activity.args = {
    title:"03/Type Of Space",
    question:"What is the typology of the occupied space?",
    recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
    hours:8, //Should update this from Promise call function
    description:"Why understading the room type can help determine the risk in viral transmission"
}


Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
