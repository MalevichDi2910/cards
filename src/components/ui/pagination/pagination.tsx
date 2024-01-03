import { MainPaginationButtons } from '@/components/ui/pagination/mainPaginationButtons'
import { NextButton, PrevButton } from '@/components/ui/pagination/navigationButtons'
import { PerPageSelect } from '@/components/ui/pagination/perPageSelect'
import { usePagination } from '@/components/ui/pagination/usePagination'
import { Option } from '@/components/ui/select'

import s from './pagination.module.scss'

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPerPageChange: (itemPerPage: number) => void
  page: number
  perPage: number
  perPageOptions?: Option[]
  siblings?: number
}

const selectItems = [
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
  { title: '50', value: '50' },
  { title: '100', value: '100' },
]

export const Pagination = ({
  count,
  onChange,
  onPerPageChange,
  page,
  siblings,
}: PaginationProps) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })
  const onPerPageChangeHandler = (itemPerPage: string) => {
    onPerPageChange(+itemPerPage)
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />
        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />
        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
        <PerPageSelect onPerPageChange={onPerPageChangeHandler} perPageOptions={selectItems} />
      </div>
    </div>
  )
}
