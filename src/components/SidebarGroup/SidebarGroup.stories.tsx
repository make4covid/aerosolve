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
    header: "Default SidebarGroup",
    component1Name: "Incomplete Component 1",
    component2Name: "Incomplete Component 2",
    component1Completed: false,
    component1Selected: false,
    component2Completed: false,
    component2Selected: false
}

Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2504',
      }

    }

    export const CompletedAndSelected = Template.bind({});
    CompletedAndSelected.args = {
        header: "Completed And Selected SidebarGroup",
        component1Name: "Completed Option",
        component2Name: "Selected Option",
        component1Completed: true, 
        component1Selected: false,
        component2Completed: false,
        component2Selected : true,

    }

    CompletedAndSelected.parameters = {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2520',
          }
    
        }
