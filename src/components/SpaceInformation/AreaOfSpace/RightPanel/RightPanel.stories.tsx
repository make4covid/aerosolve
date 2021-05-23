import { Story } from '@storybook/react';
import {RightPanel,RightPanelProps} from "./RightPanel";
export default {
    title: 'Aerosolve/Atoms/SpaceInformation/AreaofSpacce/RightPanel',
    component: RightPanel
}

const Template: Story<RightPanelProps> = (args) => <RightPanel {...args} />;

export const LeftPanel_Activity = Template.bind({});


LeftPanel_Activity.args = {

}


LeftPanel_Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
