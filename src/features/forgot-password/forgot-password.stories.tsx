import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from './forgot-password'

const meta = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Features/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
