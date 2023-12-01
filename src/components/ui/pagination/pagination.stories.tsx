import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from './pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/UI/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  // @ts-ignore
  args: {},
  render: () => {
    const [page, setPage] = useState<number>(1)

    return (
      <div>
        <Pagination count={10} onChange={setPage} page={page} />
      </div>
    )
  },
}
