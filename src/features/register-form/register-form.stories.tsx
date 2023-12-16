import type { Meta, StoryObj } from '@storybook/react'

import { RegisterForm } from '@/features/register-form/register-form'

const meta = {
  component: RegisterForm,
  tags: ['autodocs'],
  title: 'Features/RegisterForm',
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
