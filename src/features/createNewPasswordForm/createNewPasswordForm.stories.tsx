import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/common/services/store'
import { CreateNewPasswordForm } from '@/features/createNewPasswordForm/createNewPasswordForm'
import { Meta, StoryObj } from '@storybook/react'

import '@/styles/index.scss'

const meta = {
  component: CreateNewPasswordForm,
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
  title: 'Features/СreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
