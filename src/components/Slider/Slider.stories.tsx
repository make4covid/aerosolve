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

export const Basic = Template.bind({})
Basic.args = {
  max: 10,
  min: 1,
  interval: 1,
  unitPrefix: 'sq.',
  unit: 'foot',
}

export const LargeIntervals = Template.bind({})
LargeIntervals.args = {
  max: 50,
  min: 10,
  interval: 8,
  unitPrefix: 'sq.',
  unit: 'foot',
}
