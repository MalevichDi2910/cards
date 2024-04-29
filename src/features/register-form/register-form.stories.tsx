import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/common/services/store'
import { RegisterForm } from '@/features/register-form/register-form'

import '@/styles/index.scss'

const meta = {
  component: RegisterForm,
  decorators: [
    Story => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Features/RegisterForm',
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
