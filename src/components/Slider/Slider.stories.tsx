import { Story } from '@storybook/react'
import { useState } from 'react'
import { Slider as SliderComponent, SliderProps } from './Slider'

export default {
  title: 'Aerosolve/Components/Slider',
  component: SliderComponent,
}

type SliderStoryProps = SliderProps & { initialValue?: number }

const Template: Story<SliderStoryProps> = (args) => {
  // const { initialValue, ...args } = templateArgs
  const [value, setValue] = useState(args.min)

  return (
    <div className="w-3/4 p-10 bg-gray-200 rounded-lg">
      <SliderComponent {...args} value={value} onChange={setValue} />
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  // initialValue: 5,
  max: 10,
  min: 1,
  interval: 1,
  units: 'Feet',
} as SliderStoryProps

export const LargeIntervals = Template.bind({})
LargeIntervals.args = {
  // initialValue: 10,
  max: 50,
  min: 10,
  interval: 8,
  units: 'Feet',
} as SliderStoryProps
