import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkBox/checkBox'

import '@/styles/index.scss'

const meta = {
  argTypes: {
    label: { type: 'string' },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/UI/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'a1',
  },
}

export const DefaultWithText: Story = {
  args: {
    id: 'a2',
    label: 'check-box',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    id: 'a3',
    label: 'check-box',
  },
}

export const Checked: Story = {
  args: { checked: true, id: 'a4' },
}

export const CheckedWithText: Story = {
  args: {
    checked: true,
    id: 'a5',
    label: 'check-box',
  },
}

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    id: 'a6',
    label: 'check-box',
  },
}
