import React from 'react'
import {SidebarGroupHeader, SidebarGroupHeaderProps} from './SidebarGroupHeader'
import { Story, Meta } from '@storybook/react';

export default{
    title: 'Aerosolve/Atoms/SidebarGroupHeader',
    component: SidebarGroupHeader
}

const Template: Story<SidebarGroupHeaderProps> = (args) => <SidebarGroupHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
    header: "Sample Header for Sidebar Group"
}

Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2520',
      }

    }
