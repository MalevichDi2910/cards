import { ReactNode, useEffect, useState } from 'react'

import { MainPaginationButtons } from '@/components/ui/pagination/mainPaginationButtons'
import { NextButton, PrevButton } from '@/components/ui/pagination/navigationButtons'
import { PerPageSelect } from '@/components/ui/pagination/perPageSelect'
import { usePagination } from '@/components/ui/pagination/usePagination'
import { Option } from '@/components/ui/select'
import axios from 'axios'

import s from './pagination.module.scss'

export type PaginationProps = {
  children?: ReactNode
  count: number
  onChange: (page: number) => void
  onPerPageChange: (itemPerPage: string) => void
  page: number
  perPage: number
  perPageOptions: Option[]
  siblings?: number
}

export type CardPropsType = {
  body: string
  id: number
  title: string
  userId: number
}

export const Pagination = ({
  count,
  onChange,
  onPerPageChange,
  page,
  perPage,
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

  const [cards, setCards] = useState<CardPropsType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const indexOfLastCard = page * perPage
  const indexOfFirstCard = indexOfLastCard - perPage
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

      setCards(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
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
        <PerPageSelect onPerPageChange={onPerPageChange} perPageOptions={perPageOptions} />
      </div>
      <div>
        <ul>
          {currentCards.map(card => (
            <li key={card.id}>{card.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
