import { Loader } from '@/components/ui/loader/loader'
import { Meta, StoryObj } from '@storybook/react'

import '@/styles/index.scss'

const meta: Meta<typeof Loader> = {
  component: Loader,
  tags: ['autodocs'],
  title: 'Components/UI/Loader',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
