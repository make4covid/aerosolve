import React from 'react'
import { Story, Meta } from '@storybook/react';
import {SidebarGroup, SidebarGroupProps} from './SidebarGroup';

export default{
    title: 'Aerosolve/Atoms/SidebarGroup',
    component: SidebarGroup
}

const Template: Story<SidebarGroupProps> = (args) => <SidebarGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
}

Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2520',
      }

    }
