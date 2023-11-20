import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  argTypes: {
    text: { type: 'string' },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/UI/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultWithText: Story = {
  args: {
    defaultChecked: false,
    text: 'check-box',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'check-box',
  },
}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const CheckedWithText: Story = {
  args: {
    defaultChecked: true,
    text: 'check-box',
  },
}

export const CheckedDisabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    text: 'check-box',
  },
}
