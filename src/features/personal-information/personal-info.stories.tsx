import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from '@/features/personal-information/personal-info'

const meta = {
  component: PersonalInfo,
  tags: ['autodocs'],
  title: 'Features/PersonalInformation',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

const user = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  src: 'https://i.pinimg.com/564x/3a/52/1d/3a521da0debc5ff73da0df432395c64f.jpg',
}

export const Primary1: Story = {
  args: {
    user: user,
  },
}
