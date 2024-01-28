import { useParams } from 'react-router-dom'

import { useGetDeckQuery } from '@/common/services/decks'
import { useAppDispatch, useAppSelector } from '@/common/services/store'
import { GoBack } from '@/components/ui/goBack'
import { Loader } from '@/components/ui/loader'
import { Pagination } from '@/components/ui/pagination'
import { Sort, Table } from '@/components/ui/table'
import { TextField } from '@/components/ui/textField'
import { useMeQuery } from '@/features/auth/api/authApi'
import { useGetCardsQuery } from '@/features/cards/api/cardsApi'
import {
  selectCardsCurrentPage,
  selectCardsPageSize,
  selectCardsQuestion,
  selectCardsSortParams,
  selectSelectItems,
} from '@/features/cards/model'
import { cardsActions } from '@/features/cards/model/cardsSlice'
import { AddCard } from '@/features/cards/ui/addCard'
import { CardsTable } from '@/features/cards/ui/cardsTable/cardsTable'
import { PackHeader } from '@/pages/deckPage/packHeader'

import s from './deckPage.module.scss'

export const DeckPage = () => {
  const dispatch = useAppDispatch()
  const question = useAppSelector(selectCardsQuestion)
  const currentPage = useAppSelector(selectCardsCurrentPage)
  const sort = useAppSelector(selectCardsSortParams)
  const itemsPerPage = useAppSelector(selectCardsPageSize)
  const selectItems = useAppSelector(selectSelectItems)
  const sortedString = sort ? `${sort.key}-${sort.direction}` : undefined
  const { id = '' } = useParams<{ id: string }>()
  //v1/decks/clrrmf7x702o9y42wy2957xuj/cards for example
  const queryParams = { id, params: { currentPage, itemsPerPage, orderBy: sortedString, question } }

  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })
  const { data: deckData, isLoading } = useGetCardsQuery(queryParams)

  const isOwner = user?.id === deck?.userId
  const isEmptyCard = deck && deck.cardsCount > 0
  const onChangeSort = (sortParams: Sort) => {
    dispatch(cardsActions.setSort({ sortParams }))
  }
  const onChangeSetPage = (currentPage: number) => {
    dispatch(cardsActions.setCurrentPage({ currentPage }))
  }
  const onChangeSetCardsPerPage = (value: string) => {
    dispatch(cardsActions.setPageSize({ pageSize: Number(value) }))
  }
  const onChangeQuestion = (question: string) => {
    dispatch(cardsActions.setQuestion({ question }))
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={s.root}>
      <GoBack className={s.link} title={'Back to Decks List'} />
      {deck && <PackHeader deck={deck} isEmptyCard={!!isEmptyCard} isOwner={isOwner} />}
      {isEmptyCard && (
        <div>
          <TextField
            onChangeValue={onChangeQuestion}
            placeholder={'Input search'}
            type={'search'}
            value={question}
          />
          <CardsTable
            cards={deckData?.items || []}
            isOwner={isOwner}
            onSort={onChangeSort}
            sort={sort}
          />
          <Pagination
            count={deckData?.pagination.totalItems || 0}
            onChange={onChangeSetPage}
            onPerPageChange={onChangeSetCardsPerPage}
            page={currentPage}
            perPage={itemsPerPage}
            perPageOptions={selectItems}
          />
        </div>
      )}
      {!isOwner && !isEmptyCard && (
        <>
          <Table.Empty text={'This pack is empty. Click add new card to fill this pack'} />
          <Table.Empty>
            <AddCard />
          </Table.Empty>
        </>
      )}
    </div>
  )
}
