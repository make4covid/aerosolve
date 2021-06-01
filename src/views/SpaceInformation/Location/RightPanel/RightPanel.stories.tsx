import { Story } from '@storybook/react';
import {RightPanel,RightPanelProps} from "./RightPanel";

export default {
    title: 'Aerosolve/Atoms/SpaceInformation/Location/RightPanel',
    component: RightPanel
}

const Template: Story<RightPanelProps> = (args) => <RightPanel {...args} />;

export const RightPanel_Activity = Template.bind({});



RightPanel_Activity.args = {
    confirmed_case: 11021,
    today_case: 17,
    death_total_case: 420,
    death_today_case: 0,
    vaccination_rate: 22,
    vaccination_total: 1272898,
    relative_air_humidity: 47
}


RightPanel_Activity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
