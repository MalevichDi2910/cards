import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Components/UI/Card',
} satisfies Meta<typeof Card>

export default meta
type CardStory = StoryObj<typeof meta>

export const Primary: CardStory = {}

export const Secondary: CardStory = {
  args: {
    className: 'white',
  },
}
