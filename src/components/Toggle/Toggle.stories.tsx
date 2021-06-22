import { Story } from '@storybook/react'
import { Toggle as ToggleComponent, ToggleProps } from './Toggle'
import { withDesign } from 'storybook-addon-designs'
import { useState } from 'react'

export default {
  title: 'Aerosolve/Components/Toggle',
  component: ToggleComponent,
  decorators: [withDesign],
}

export const Toggle: Story<ToggleProps> = () => {
  const [selected, setSelected] = useState('Basic')
  return (
    <ToggleComponent options={['Basic', 'Advanced']} selected={selected} onSelect={setSelected} />
  )
}

Toggle.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/i8vEpJcNHhu675LIDjAajL/Click-through-prototype?node-id=3498%3A0',
  },
}
