import { MainPaginationButtons } from '@/components/ui/pagination/mainPaginationButtons'
import { NextButton, PrevButton } from '@/components/ui/pagination/navigationButtons'
import { PerPageSelect } from '@/components/ui/pagination/perPageSelect'
import { usePagination } from '@/components/ui/pagination/usePagination'
import { Option } from '@/components/ui/select'

import s from './pagination.module.scss'

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPerPageChange: (itemPerPage: string) => void
  page: number
  perPage: number
  perPageOptions: Option[]
  siblings?: number
}

export const Pagination = ({
  count,
  onChange,
  onPerPageChange,
  page,
  perPageOptions,
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
        <PerPageSelect onPerPageChange={onPerPageChange} perPageOptions={perPageOptions} />
      </div>
    </div>
  )
}
