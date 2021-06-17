import { Story } from '@storybook/react'
import { useState } from 'react'
import { Slider as SliderComponent, SliderProps } from './Slider'

export default {
  title: 'Aerosolve/Components/Slider',
  component: SliderComponent,
}

const Template: Story<SliderProps> = (args) => {
  const [value, setValue] = useState(args.min)

  return (
    <div className="w-5/6 px-10 py-5 m-auto bg-gray-200 rounded-lg">
      <SliderComponent {...args} value={value} onChange={setValue} />
    </div>
  )
}

export const Hours = Template.bind({})
Hours.args = {
  min: 0,
  max: 24,
  interval: 4,
  // unitPrefix: 'sq.',
  unit: 'hour',
}

export const CeilingHeight = Template.bind({})
CeilingHeight.args = {
  min: 7,
  max: 21,
  interval: 2,
  // unitPrefix: 'sq.',
  unit: 'foot',
}

export const RoomArea = Template.bind({})
RoomArea.args = {
  min: 0,
  max: 10000,
  interval: 1000,
  unitPrefix: 'sq.',
  unit: 'foot',
}
