import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'subtitle1',
        'body2',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'large',
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    children: 'h1 title',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'h2 title',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'h3 title',
    variant: 'h3',
  },
}

export const Body1: Story = {
  args: {
    children: 'body1',
    variant: 'body1',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'subtitle1',
    variant: 'subtitle1',
  },
}
export const Body2: Story = {
  args: {
    children: 'body2',
    variant: 'body2',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Subtitle2',
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: 'caption',
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'overline',
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    children: 'link1',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    children: 'link2',
    variant: 'link2',
  },
}
