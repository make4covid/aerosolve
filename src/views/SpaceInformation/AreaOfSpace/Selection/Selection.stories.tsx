import { Story } from '@storybook/react';
import { SelectionCard,SelectionCardProps} from './Selection';


export default {
    title: 'Aerosolve/Atoms/SpaceInformation/AreaofSpace/SelectionCard',
    component: SelectionCard
}

const Template: Story<SelectionCardProps> = (args) => <SelectionCard {...args} />;

export const HoursCards = Template.bind({});

HoursCards.args = {
    header: "SelectionCard",
    squareFeet: 50

}


HoursCards.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
    }
}
