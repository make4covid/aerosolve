import { Story } from '@storybook/react';
import {Location,LocationProps} from "./Location";

export default {
    title: 'Aerosolve/Atoms/SpaceInformation/Location',
    component: Location
}

const Template: Story<LocationProps> = (args) => <Location {...args} />;

export const Activity = Template.bind({});



Activity.args = {
    title:"02/Location",
    question:"Where is the occupied space located",
    recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
    hours:8, //Should update this from Promise call function
    description:"Different age groups of people have different risk levels in the events of an aerosol infection"
}


Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
