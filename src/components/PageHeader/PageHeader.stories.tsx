import { Story } from '@storybook/react'
import { PageHeader } from './PageHeader'

export default {
  title: 'Aerosolve/Compositions/Page Header',
  component: PageHeader,
}

const Template: Story<{}> = (args) => <PageHeader {...args} />

export const Header = Template.bind({})

Header.args = {
  title: '01/Target Occupancy',
  prompt: 'What is the target occupancy for this space?',
  description: 'This is a description',
}

Header.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=1584%3A5819',
  },
}
