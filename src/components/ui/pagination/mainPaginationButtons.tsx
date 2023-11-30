import { FC } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'

export type MainPaginationButtonsProps = {
  className?: string
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

export const MainPaginationButtons = (props: MainPaginationButtonsProps) => {
  const { currentPage, onClick, paginationRange } = props
  const Dots: FC = () => {
    return <span className={s.dots}>&#8230;</span>
  }

  return (
    <>
      {paginationRange.map((page, index) => {
        const isSelected = page == currentPage
        const classNames = clsx(isSelected ? s.selected : '', s.item)

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return (
          <button className={classNames} key={index} onClick={onClick(page)}>
            {page}
          </button>
        )
      })}
    </>
  )
}
