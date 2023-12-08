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
    const selectItems = [
      { title: '10', value: '10' },
      { title: '20', value: '20' },
      { title: '30', value: '30' },
      { title: '50', value: '50' },
      { title: '100', value: '100' },
    ]
    const [page, setPage] = useState<number>(1)
    const [cardsPerPage, setCardsPerPage] = useState<number>(10)

    const onPerPageChangeHandler = (itemPerPage: string) => {
      setCardsPerPage(+itemPerPage)
    }

    return (
      <div>
        <Pagination
          count={10}
          onChange={setPage}
          onPerPageChange={onPerPageChangeHandler}
          page={page}
          perPage={cardsPerPage}
          perPageOptions={selectItems}
        />
      </div>
    )
  },
}
