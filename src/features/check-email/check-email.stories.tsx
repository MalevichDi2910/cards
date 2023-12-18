import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '@/features/check-email/check-email'

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Features/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
