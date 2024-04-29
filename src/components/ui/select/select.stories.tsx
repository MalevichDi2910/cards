import type { Meta, StoryObj } from '@storybook/react'

import '@/styles/index.scss'

import { Option, Select } from './select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/UI/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const initialState: Option[] = [
  { title: 'Select-box 1', value: '1' },
  { title: 'Select-box 2', value: '2' },
  { title: 'Select-box 3', value: '3' },
  { title: 'Select-box 4', value: '4' },
]

export const Default: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    options: initialState,
  },
}

export const FullWidth: Story = {
  args: {
    disabled: false,
    fullWidth: true,
    options: initialState,
  },
}

export const WithLabel: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    label: 'label',
    options: initialState,
  },
}

const initialStatePagination: Option[] = [
  { title: '10', value: 'ten' },
  { title: '20', value: 'twenty' },
  { title: '30', value: 'thirty' },
  { title: '50', value: 'forty' },
  { title: '100', value: 'one hundred' },
]

export const Pagination: Story = {
  args: {
    disabled: false,
    options: initialStatePagination,
    placeholder: initialStatePagination[4].title,
    variant: 'pagination',
  },
}
