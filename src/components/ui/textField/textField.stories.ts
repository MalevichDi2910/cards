import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/textField'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['password', 'search', 'text'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/UI/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    type: 'text',
  },
}

export const Invalid: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error!',
    label: 'Input',
    placeholder: 'Error',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
  },
}
export const Search: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input search',
    type: 'search',
  },
}

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
}
