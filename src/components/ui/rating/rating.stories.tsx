import { Rating } from '@/components/ui/rating/rating'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Rating> = {
  argTypes: {
    rating: Number,
  },
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/UI/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    rating: 5,
  },
}

export const Empty: Story = {
  args: {
    rating: 0,
  },
}

export const Combined: Story = {
  args: {
    maxRating: 5,
    rating: 4,
  },
}
