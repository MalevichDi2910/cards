import { FC, ReactNode, useEffect, useState } from 'react'

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
  onPerPageChange?: (itemPerPage: number) => void
  page: number
  perPage?: number
  perPageOptions?: Option[]
  siblings?: number
}

export type CardPropsType = {
  body: string
  id: number
  title: string
  userId: number
}

const selectItems = [
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
  { title: '50', value: '50' },
  { title: '100', value: '100' },
]

export const Pagination: FC<PaginationProps> = ({ count, onChange, page, siblings }) => {
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
  const [cardsPerPage, setCardsPerPage] = useState<number>(10)

  const indexOfLastCard = page * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
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

  const onPerPageChangeHandler = (value: string) => {
    setCardsPerPage(+value)
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
