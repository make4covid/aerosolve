import { Story } from '@storybook/react';
import { SidebarGroup, SidebarGroupProps } from './SidebarGroup';
import { ItemStatus } from './SidebarGroupItem/SidebarGroupItem'

export default {
    title: 'Aerosolve/Atoms/SidebarGroup',
    component: SidebarGroup
}

const Template: Story<SidebarGroupProps> = (args) => <SidebarGroup {...args} />;

export const CompletedActiveInactive = Template.bind({});

CompletedActiveInactive.args = {
    header: "Sidebar Group",
    items: [
        { value: "Completed Item", status: ItemStatus.Completed, action: () => null },
        { value: "Active Item", status: ItemStatus.Active, action: () => null },
        { value: "Inactive Item", status: ItemStatus.Inactive, action: () => null },
    ]
}

CompletedActiveInactive.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2520',
    }
}
