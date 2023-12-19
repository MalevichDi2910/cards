import { CreateNewPasswordForm } from '@/features/createNewPasswordForm/createNewPasswordForm'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'Features/СreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
