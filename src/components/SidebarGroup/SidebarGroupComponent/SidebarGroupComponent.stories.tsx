import React from 'react'
import SidebarGroupComponent from './SidebarGroupComponent'
import {SidebarGroupComponentProps} from './SidebarGroupComponent'
import { Story, Meta } from '@storybook/react';

export default{
    title: 'Aerosolve/Atoms/SidebarGroupComponent',
    component: SidebarGroupComponent
}

const Template: Story<SidebarGroupComponentProps> = (args) => <SidebarGroupComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    componentName: "Sample Component",
    completed: false,
    selected: false
}
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2504',
      }

}

export const Selected = Template.bind({});
Selected.args = {
    componentName: "Selected Component",
    completed: false,
    selected: true
}
Selected.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2496',
      }
}

export const Completed = Template.bind({});
Completed.args = {
    componentName: "Completed Component",
    completed: true,
    selected: false
}
Completed.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2523',
      }
}


