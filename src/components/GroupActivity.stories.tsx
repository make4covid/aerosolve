import { Story } from '@storybook/react';
import { GroupActivity, CardGroup } from './GroupActivity';
import KidImage from "../../icons/KidImage.png"

export default {
    title: 'Aerosolve/Atoms/SubComponent/SelectionCardGroupActivity',
    component: GroupActivity
}

const Template: Story<CardGroup> = (args) => <GroupActivity {...args} />;

export const Activity = Template.bind({});

Activity.args = {
    header: "Activity",
    items: [
        { title: "Living Room", activity: ["Hiking,Snowing,Skiing"] ,image:KidImage},
        { title: "Classroom", activity: ["Driving,Partying, Whatnoting"] , image:KidImage},

    ]
}


Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
