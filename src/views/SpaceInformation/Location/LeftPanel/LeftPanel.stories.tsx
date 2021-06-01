import { Story } from '@storybook/react';
import {LeftPanel,LeftPanelProps} from "./LeftPanel";

export default {
    title: 'Aerosolve/Atoms/SpaceInformation/Location/LeftPanel',
    component: LeftPanel
}

const Template: Story<LeftPanelProps> = (args) => <LeftPanel {...args} />;

export const LeftPanel_Activity = Template.bind({});



LeftPanel_Activity.args = {
    rate: "Low Risk",
    description:"due to high vaccination rate"
}


LeftPanel_Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
