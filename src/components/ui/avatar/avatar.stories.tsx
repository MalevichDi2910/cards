import { Meta, StoryObj } from '@storybook/react'

import '@/styles/index.scss'

import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  argTypes: {
    size: {
      control: 'select',
      description: 'Size of the avatar',
      options: ['small', 'large'],
    },
    src: { description: 'Image URL for the avatar', type: 'string' },
    userName: { description: 'User name for the avatar', type: 'string' },
  },
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/UI/Avatar',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userName: 'Ivan',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    userName: 'Ivan',
  },
}

export const DefaultWithImage: Story = {
  args: {
    src: 'https://placehold.co/36',
    userName: 'Ivan',
  },
}

export const LargeWithImage: Story = {
  args: {
    size: 'large',
    src: 'https://placehold.co/96',
    userName: 'Ivan',
  },
}
