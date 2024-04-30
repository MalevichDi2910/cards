import type { Meta, StoryObj } from '@storybook/react'

import { GoBack } from '@/components/ui/goBack/goBack'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: GoBack,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Components/UI/GoBack',
} satisfies Meta<typeof GoBack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Back',
  },
}
