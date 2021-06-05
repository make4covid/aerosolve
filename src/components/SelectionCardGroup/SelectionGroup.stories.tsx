import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { SelectionGroup, SelectionGroupProps } from './SelectionGroup';

import Kids from 'assets/images/kids.png';

import { withDesign } from 'storybook-addon-designs';
import { SelectionOptions } from 'components/SelectionCard/SelectionCard';

export default {
    title: 'Aerosolve/Atoms/Selection Group',
    component: SelectionGroup,
    decorators: [withDesign],
} as Meta;



let options: SelectionOptions[] = [

    {
        title: 'Children/Teens\n0-16 Years Old',
        description: 'Lower Risk',
        img: Kids,
    },
    {
        title: 'Adults\n17 - 63 Years Old',
        description: 'Medium Risk',
        img: Kids,
    },
    {
        title: 'Senior\n64+ Years Old',
        description: 'Higher Risk',
        img: Kids,
    }

];

const Template: Story<SelectionGroupProps> = (args) => {
    const [selected, setSelected] = useState([] as number[]);

    return (
        <div>
            <SelectionGroup {...args} selected={selected} setSelected={setSelected} />
        </div>
    );
};

export const occupant_singleSelect = Template.bind({});
//Simulate occupant age groups
occupant_singleSelect.args = {
    options,
    multi: false,
    cardCol: true,
    columns:3
};

occupant_singleSelect.parameters = {
    design: {
        type: 'figma',
        url:
            'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=2437%3A8028',
    },
};


options = [

    {
        title: 'Living Room',
        description: 'Lowest Risk'
    },
    {
        title: 'Classroom',
        description: 'Lowest Risk',
    },
    {
        title: 'Place of Worship',
        description: 'Medium Risk',
    },
    {
        title: 'Restaurant',
        description: 'Medium Risk',
    },
    {
        title: 'Office',
        description: 'Medium Risk',
    },
    {
        title: 'Bus/Train',
        description: 'Higher Risk',
    },
    {
        title: 'Commercial Airline',
        description: 'Higher Risk',
    },
    {
        title: 'Grocery Store',
        description: 'Higher Risk',
    },

];

export const typeOfSpace_singleSelect = Template.bind({});
//Simulate type of space
typeOfSpace_singleSelect.args = {
    options,
    multi: false,
    cardCol: false,
    columns:3
};

typeOfSpace_singleSelect.parameters = {
    design: {
        type: 'figma',
        url:
            'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=2437%3A8028',
    },
};

options = [

    {
        title: "Whispering",
        img: Kids
    },
    {
        title: 'Conversation',
        img: Kids
    },
    {
        title: 'Conference',
        img: Kids
    },
    {
        title: 'Singing\nSpeech\nLoud Talking',
        img: Kids
    }
];

export const vocalActivity_singleSelect = Template.bind({});
//Simulate type of space
vocalActivity_singleSelect.args = {
    options,
    multi: false,
    cardCol: false,
    columns:2
};

vocalActivity_singleSelect.parameters = {
    design: {
        type: 'figma',
        url:
            'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=2437%3A8028',
    },
};



options = [

    {
        title: "Resting",
        img: Kids
    },
    {
        title: 'Standing',
        img: Kids
    },
    {
        title: 'Exercise',
        img: Kids
    },
    {
        title: 'Heavy Exercise',
        img: Kids
    }
];


export const physicalActivity_singleSelect = Template.bind({});
//Simulate type of space
physicalActivity_singleSelect.args = {
    options,
    multi: false,
    cardCol: false,
    columns:2
};

physicalActivity_singleSelect.parameters = {
    design: {
        type: 'figma',
        url:
            'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=2437%3A8028',
    },
};