import React from 'react'
import { SidebarGroupItem, SidebarGroupItemProps, ItemStatus } from './SidebarGroupItem'
import { Story, Meta } from '@storybook/react';

export default {
    title: 'Aerosolve/Atoms/SidebarGroupItem',
    component: SidebarGroupItem
}

const Template: Story<SidebarGroupItemProps> = (args) => <SidebarGroupItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: "Default Component",
    status: ItemStatus.Inactive,
}

Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2504',
    }
}

export const Selected = Template.bind({});
Selected.args = {
    value: "Active Component",
    status: ItemStatus.Active,
}
Selected.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2496',
    }
}

export const Completed = Template.bind({});
Completed.args = {
    value: "Completed Item",
    status: ItemStatus.Completed,
}
Completed.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2523',
    }
}



