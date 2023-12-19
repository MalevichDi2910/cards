import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from '@/features/personal-information/personal-info'

export const userExample = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  src: 'https://i.pinimg.com/564x/3a/52/1d/3a521da0debc5ff73da0df432395c64f.jpg',
}

const meta = {
  args: {
    user: userExample,
  },
  component: PersonalInfo,
  tags: ['autodocs'],
  title: 'Features/PersonalInformation',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary1: Story = {}
