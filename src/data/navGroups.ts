import { NavGroup } from 'components/SidebarNavigation';

export const navGroupsInitial: NavGroup[] = [
  {
    header: 'Safety Goal',
    items: [
      {
        route: '/target-occupancy',
        completed: false,
        active: false,
        value: 'Target Occupancy',
      },
    ],
  },
  {
    header: 'Space Informaiton',
    items: [
      {
        route: '/location',
        completed: false,
        active: false,
        value: 'Location',
      },
      {
        route: '/type-of-space',
        completed: false,
        active: false,
        value: 'Type of Space',
      },
      {
        route: '/area-of-space',
        completed: false,
        active: false,
        value: 'Area of Space',
      },
      {
        route: '/ceiling-height',
        completed: false,
        active: false,
        value: 'Ceiling Height',
      },
    ],
  },
  {
    header: 'Usage and Behavior',
    items: [
      {
        route: '/age-groups',
        completed: false,
        active: false,
        value: 'Occupant Age Groups',
      },
      {
        route: '/physical-activity',
        completed: false,
        active: false,
        value: 'Vocal Activity',
      },
      {
        route: '/physical-activity',
        completed: false,
        active: false,
        value: 'Physical Activity',
      },
    ],
  },
  {
    header: 'Mask Usage',
    items: [
      {
        route: '/types-of-masks',
        completed: false,
        active: false,
        value: 'Types of Masks',
      },
      {
        route: '/mask-fit',
        completed: false,
        active: false,
        value: 'Mask Fit',
      },
    ],
  },
  {
    header: 'Ventilation',
    items: [
      {
        route: '/ventilation',
        completed: false,
        active: false,
        value: 'Ventilation + Filtration',
      },
    ],
  },
];
