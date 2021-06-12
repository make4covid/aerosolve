import { Story } from '@storybook/react'
import { NavProps } from 'reactstrap'
import { Navigation } from '../Navigation'
// import { SidebarGroup, NavGroup } from './NavigationGroup'

export default {
  title: 'Aerosolve/Components/Navigation',
  component: Navigation,
}

const Template: Story<NavProps> = (args) => <Navigation navGroups={[]} stepStatus={{}} {...args} />

export const CompletedActiveInactive = Template.bind({})

// CompletedActiveInactive.args = {
//   header: 'Sidebar Group',
//   items: [
//     { value: 'Completed Item', active: false, route: 'test', completed: true },
//     {
//       value: 'Active Completed Item',
//       active: true,
//       route: 'test',
//       completed: true,
//     },
//     { value: 'Inactive Item', active: false, route: 'test', completed: false },
//     {
//       value: 'Active Incomplete Item',
//       active: true,
//       route: 'test',
//       completed: true,
//     },
//   ],
// }

// CompletedActiveInactive.parameters = {
//   design: {
//     type: 'figma',
//     url:
//       'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=737%3A2520',
//   },
// }
