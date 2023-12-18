import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/features/SignInForm/signInForm'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Features/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
