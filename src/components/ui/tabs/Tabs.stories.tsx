import type { Meta, StoryObj } from '@storybook/react'

import '@/styles/index.scss'

import { TabItem } from './tabItem'
import { Tabs } from './tabs'

const meta = {
  argTypes: {
    value: {
      control: { type: 'radio' },
      options: ['1', '2', '3', '4', '5'],
    },
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/UI/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Switcher: Story = {
  args: {
    children: (
      <>
        <TabItem value={'1'}>Switcher</TabItem>
        <TabItem value={'2'}>Switcher</TabItem>
        <TabItem value={'3'}>Switcher</TabItem>
        <TabItem value={'4'}>Switcher</TabItem>
        <TabItem disabled value={'5'}>
          Switcher
        </TabItem>
      </>
    ),
    defaultValue: '2',
    label: 'Title',
  },
}
