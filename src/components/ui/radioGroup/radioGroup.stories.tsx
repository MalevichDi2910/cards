import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radioGroup'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/UI/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  // @ts-ignore
  args: {},
  render: () => {
    const optionsData = [
      { title: 'RadioGroup 1', value: '1' },
      { title: 'RadioGroup 2', value: '2' },
      { title: 'RadioGroup 3', value: '3' },
      { title: 'RadioGroup 4', value: '4' },
      { title: 'RadioGroup 5', value: '5' },
    ]

    return <RadioGroup options={optionsData} />
  },
}

export const Disabled: Story = {
  // @ts-ignore
  args: {},
  render: () => {
    const optionsData = [
      { title: 'RadioGroup 1', value: '1' },
      { title: 'RadioGroup 2', value: '2' },
    ]

    return <RadioGroup disabled options={optionsData} />
  },
}
