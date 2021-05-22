import { Story } from '@storybook/react';
import { OccupantsCard,OccupantsCardProps} from '../OccupantsCard/OccupantsCard';
import {NumberOfOccupants} from "./NumberOfOccupants"

export default {
    title: 'Aerosolve/Atoms/SafetyGoal/TargetOccupancy/NumberOfOccupants',
    component: NumberOfOccupants
}

const Template: Story<OccupantsCardProps> = (args) => <NumberOfOccupants {...args} />;

export const NumberOfOccupantCard = Template.bind({});

NumberOfOccupantCard.args = {
    header: "OccupantCard",
    nOfOccupant: 50

}


NumberOfOccupantCard.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
