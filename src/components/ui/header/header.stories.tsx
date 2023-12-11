import type { Meta, StoryObj } from '@storybook/react'

import ItIncubator from '@/assets/icons/itIncubator'
import { AvatarWithName } from '@/components/ui/avatarWithName/avatarWithName'
import { Button } from '@/components/ui/button'

import { Header } from './'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderWithButton: Story = {
  args: {
    children: (
      <>
        <ItIncubator height={'36'} width={'157'} />
        <Button variant={'primary'}>Sign In</Button>
      </>
    ),
  },
}

export const HeaderWithDropDown: Story = {
  args: {
    children: (
      <>
        <ItIncubator height={'36'} width={'157'} />
        <AvatarWithName src={'https://placehold.co/96'} userName={'Simon'} />
      </>
    ),
  },
}
