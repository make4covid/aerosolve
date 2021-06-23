import React from 'react'
import { Story } from '@storybook/react'
import { PageFooter as PageFooterComponent, PageFooterProps } from './PageFooter'

export default {
  title: 'Aerosolve/Compositions/PageFooter',
  component: PageFooterComponent,
}

export const PageFooter: Story<PageFooterProps> = (args) => <PageFooterComponent {...args} />

PageFooter.args = {
  nextStepRoute: 'NextRoute',
  nextStepLabel: 'Next Step',
  lastStepRoute: 'LastRoute',
  lastStepLabel: 'Last Step',
}
