import React from 'react'
import { Story, Meta } from '@storybook/react';
import { SidebarGroup, SidebarGroupProps } from './SidebarGroup';
import { SidebarGroupItem, SidebarGroupItemProps, ItemStatus } from './SidebarGroupItem/SidebarGroupItem'

export default {
    title: 'Aerosolve/Atoms/SidebarGroup',
    component: SidebarGroup
}

const Template: Story<SidebarGroupProps> = (args) => <SidebarGroup {...args} />;

export const Default = Template.bind({});
const DefaultItems: SidebarGroupItemProps[] = [
    { value: "Inactive Item 1", status: ItemStatus.Inactive, action: () => null }, //Just passing empty function for now.
    { value: "Inactive Item 2", status: ItemStatus.Inactive, action: () => null },
];

Default.args = {
    header: "Inactive SidebarGroup",
    items: DefaultItems
}

Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2504',
    }
}

export const CompletedAndActive = Template.bind({});
const CompletedAndActiveItems: SidebarGroupItemProps[] = [
    { value: "Completed Item", status: ItemStatus.Completed, action: () => null }, //Just passing empty function for now.
    { value: "Active Item", status: ItemStatus.Active, action: () => null },
];

CompletedAndActive.args = {
    header: "Completed And Active SidebarGroup",
    items: CompletedAndActiveItems
}

CompletedAndActive.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2520',
    }

}
