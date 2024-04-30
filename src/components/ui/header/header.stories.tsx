import type { Meta, StoryObj } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6'

import { Header } from './'

const meta = {
  argTypes: {},
  component: Header,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

const user = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  src: 'https://i.pinimg.com/564x/3a/52/1d/3a521da0debc5ff73da0df432395c64f.jpg',
}

export const HeaderWithButton: Story = {
  args: {},
}

export const HeaderWithDropDown: Story = {
  args: {
    isLoggedIn: true,
    user: user,
  },
}
