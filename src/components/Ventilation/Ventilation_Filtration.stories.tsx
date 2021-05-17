import { Story } from '@storybook/react';
import {Ventilation_Filtration,Ventilation_Filtration_Props} from "./Ventilation_Filtration";

export default {
    title: 'Aerosolve/Atoms/Ventilation/Ventilation_Filtration',
    component: Ventilation_Filtration
}

const Template: Story<Ventilation_Filtration_Props> = (args) => <Ventilation_Filtration {...args} />;

export const Activity = Template.bind({});



Activity.args = {
    title:"11/Ventilation+Filtration",
    question:"Quick survey of the population of occupants in the space",
    recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
    hours:8, //Should update this from Promise call function
    description:"Different age groups of people have different risk levels in the event of an aerosol infection"
}


Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
