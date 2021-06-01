import { Story } from '@storybook/react';
import {LeftPanel,LeftPanelProps} from "./LeftPanel";

export default {
    title: 'Aerosolve/Atoms/SpaceInformation/AreaofSpacce/LeftPanel',
    component: LeftPanel
}

const Template: Story<LeftPanelProps> = (args) => <LeftPanel {...args} />;

export const LeftPanel_Activity = Template.bind({});


LeftPanel_Activity.args = {
    size: "small apartment",
    description:"18 people or less"
}


LeftPanel_Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
