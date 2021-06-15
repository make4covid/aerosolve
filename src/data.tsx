import { NavGroup, NavGroupStep } from 'components/Navigation/Navigation'
import * as Views from 'views'

export type StepViewProps = {
  onComplete: () => void
}

export type Header = {
  prompt: string
  description?: string
}
export type Step = {
  route: string
  title: string
  component: React.FC<StepViewProps>
  header: Header
  index?: number
}

const stepGroups = [
  { groupName: 'Safety Goal', steps: [0] },
  { groupName: 'Space Information', steps: [1, 2, 3, 4] },
  { groupName: 'Usage and Behavior', steps: [5, 6, 7] },
  { groupName: 'Mask Usage', steps: [8, 9] },
  { groupName: 'Ventilation', steps: [10] },
]

const steps: Step[] = [
  {
    route: '/target-occupancy',
    title: 'Target Occupancy',
    component: Views.TargetOccupancy,
    header: {
      prompt: 'How many people should be able to safely occupy the space, and for how long?',
    },
  },
  {
    route: '/location',
    title: 'Location',
    component: Views.Location,
    header: {
      prompt: 'Where is the occupied space located',
      description:
        'Different age groups of people have different risk levels in the events of an aerosol infection',
    },
  },
  {
    route: '/type-of-space',
    title: 'Type of Space',
    component: Views.TypeOfSpace,
    header: {
      prompt: 'What type of space does your space most resemble?',
      description:
        'Why understanding the room type can help determine the risk in viral transmission',
    },
  },
  {
    route: '/area-of-space',
    title: 'Area of Space',
    component: Views.AreaOfSpace,
    header: {
      prompt: "About how large is the space you're evaluation?",
      description:
        'Why understanding the room type can help determine the risk in viral transmission',
    },
  },
  {
    route: '/ceiling-height',
    title: 'Ceiling Height',
    component: Views.CeilingHeight,
    header: {
      prompt: 'About how tall, on average, is the ceiling in the space?',
      description:
        'Ceiling height provides accurate data to the calculation of room volume in air exchange rate',
    },
  },
  {
    route: '/occupant-ages',
    title: 'Occupant Ages',
    component: Views.OccupantAgeGroups,
    header: {
      prompt: 'About how tall, on average, is the ceiling in the space?',
      description:
        'Different age groups of people have different risk levels in the event of an aerosol infection',
    },
  },
  {
    route: '/vocal-activity',
    title: 'Vocal Activity',
    component: Views.VocalActivity,
    header: { prompt: 'What types of vocal activities are typical in the space?' },
  },
  {
    route: '/physical-activity',
    title: 'Physical Activity',
    component: Views.PhysicalActivity,
    header: {
      prompt: 'What types of physical activities are typical in the space?',
      description:
        'Physical activity increases breathing rates, which means more aerosols are released into the air',
    },
  },
  {
    route: '/types-of-masks',
    title: 'Types of Masks',
    component: Views.TypeOfMask,
    header: {
      prompt: 'What type of masks are worn by most occupants within the space?',
      description:
        'Masks are the most important factor in keeping your space safe and preventing virus transmission between occupants',
    },
  },
  {
    route: '/mask-fit',
    title: 'Mask Fit',
    component: Views.MaskFit,
    header: {
      prompt: 'Quick survey of mask compliance among the occupants',
      description:
        'Wearing masks correctly is important to reduce the aerosol transmission of airborne viruses. Many people do not wear masks that fit properly, or wear masks incorrectly',
    },
  },
  {
    route: '/ventilation-filtration',
    title: 'Ventilation + Filtration',
    component: Views.VentilationFiltration,
    header: {
      prompt: 'What age groups',
      description: 'People of different ages face different risks',
    },
  },
]

steps.forEach((step, index) => (step.index = index))
const navGroups: NavGroup[] = stepGroups.map((group) => {
  const groupSteps: NavGroupStep[] = group.steps.map((stepIndex) => {
    const { header, index, component, ...step } = steps[stepIndex]
    return step
  })
  return { header: group.groupName, steps: groupSteps }
})

export { navGroups }

export { steps }
