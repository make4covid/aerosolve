import React from "react";
import { Story } from '@storybook/react';
import { PageFooter} from './PageFooter';


export default {
    title: 'Aerosolve/Atoms/SubComponent/PageFooter',
    component: PageFooter
}

// @ts-ignore
const Template: Story<PageFooter> = ({}) => <PageFooter/>;


export const PageFooterActivity = Template.bind({});

