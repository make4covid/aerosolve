import { Story } from '@storybook/react'
import { PageHeader, PageHeaderProps } from './PageHeader'

export default {
  title: 'Aerosolve/Components/PageHeader',
  component: PageHeader,
}

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />

export const Header = Template.bind({})

Header.args = {
  header: 'PageHeader',
  title: '01/Target Occupancy',
  question: 'What is the target occupancy for this space?',
  targetHours: 6,
  safeHours: 4,
  targetOccupancy: 30,
  description: 'This is a description',
}

Header.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
}
