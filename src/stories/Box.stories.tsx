import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from '../components/Box';

import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Aerosolve/Atoms/Box',
  component: Box,
  decorators: [withDesign]
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: false
};

Default.parameters = {
       design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=288%3A0',
      },
    }
    
    
export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};
    
Selected.parameters = {
    design: {
    type: 'figma',
    url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=229%3A666',
  },
}

// const addDesign = (components: Story<BoxProps>[]) => {
//   components.forEach((component) => {
//     component.parameters = {
//        design: {
//         type: 'figma',
//         url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=229%3A666',
//       },
//     }
//   })
// }

// addDesign([Default, Selected])