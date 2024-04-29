import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/common/services/store'
import { PersonalInfo } from '@/features/personal-information/personal-info'

import '@/styles/index.scss'

const meta = {
  component: PersonalInfo,
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
  title: 'Features/PersonalInformation',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

const user = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  src: 'https://i.pinimg.com/564x/3a/52/1d/3a521da0debc5ff73da0df432395c64f.jpg',
}

export const Primary1: Story = {
  args: {
    data: user,
  },
}
