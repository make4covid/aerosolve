import { Story } from '@storybook/react'
import { SelectionSlider } from './SelectionSlider'
import { Slider } from './SelectionSlider'

export default {
  title: 'Aerosolve/Refactor/SelectionSlider',
  component: SelectionSlider,
}

const Template: Story<Slider> = (args) => (
  <div className="w-full h-48 bg-gray-400">
    <br />
    <br />
    <br />
    <br />
    <SelectionSlider {...args} />;
  </div>
)

export const HourSlider = Template.bind({})

HourSlider.args = {
  value: 5,
  min: '0',
  max: '24',
  unit: 'Hours',
  arrayValue: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ],
}

export const SquareSlider = Template.bind({})
SquareSlider.args = {
  value: 600,
  min: '100',
  max: '>10000',
  unit: 'sq.feet',
  arrayValue: [100, 500, 1000, 5000, 10000, 15000],
}
