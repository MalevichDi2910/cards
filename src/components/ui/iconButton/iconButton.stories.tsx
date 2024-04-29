import type { Meta, StoryObj } from '@storybook/react'

import LogOut from '@/assets/icons/logOut'

import '@/styles/index.scss'

import { IconButton } from './iconButton'

const meta: Meta<typeof IconButton> = {
  argTypes: {
    icon: {
      control: false,
    },
  },
  component: IconButton,
  tags: ['autodocs'],
  title: 'Components/UI/IconButton',
}

export default meta
type Story = StoryObj<typeof meta>

export const LogoutIconButton: Story = {
  args: {
    icon: <LogOut />,
    size: 1,
  },
}
