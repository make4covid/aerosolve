import { Story } from '@storybook/react';
import { SidebarGroup, NavGroup } from './SidebarGroup';

export default {
    title: 'Aerosolve/Atoms/SubComponent/SidebarGroup',
    component: SidebarGroup
}

const Template: Story<NavGroup> = (args) => <SidebarGroup {...args} />;

export const CompletedActiveInactive = Template.bind({});

CompletedActiveInactive.args = {
    header: "Sidebar Group",
    items: [
        { value: "Completed Item", active: false, route: "test", completed: true },
        { value: "Active Completed Item", active: true, route: "test", completed: true},
        { value: "Inactive Item", active: false, route: "test", completed: false},
        { value: "Active Incomplete Item", active: true, route: "test", completed: true},
    ]
}

CompletedActiveInactive.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2520',
    }
}
