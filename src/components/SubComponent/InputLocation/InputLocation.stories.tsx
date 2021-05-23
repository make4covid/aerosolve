import { Story } from '@storybook/react';
import { InputLocation, InputLocationProps } from './InputLocation';

export default {
    title: 'Aerosolve/Atoms/SpaceInformation/Location/InputLocation',
    component: InputLocation
}

const Template: Story<InputLocationProps> = (args) => <InputLocation {...args} />;

export const InputLocationActivity = Template.bind({});

InputLocationActivity.args = {
    header: "Activity",
    location: "CO,USA"
}


InputLocationActivity.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
