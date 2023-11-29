import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './slider'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/UI/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  // @ts-ignore
  args: {},
  render: () => {
    const [range, setRange] = useState([0, 100])
    const onRangeChange = (range: number[]) => {
      setRange(range)
    }

    return <Slider onRangeChange={onRangeChange} range={range} />
  },
}
