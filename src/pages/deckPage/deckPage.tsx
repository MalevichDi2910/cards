import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/common/services/store'
import { Button } from '@/components/ui/button'
import { GoBack } from '@/components/ui/goBack'
import { Loader } from '@/components/ui/loader'
import { Pagination } from '@/components/ui/pagination'
import { Sort, Table } from '@/components/ui/table'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/features/auth/api/authApi'
import { useGetCardsQuery } from '@/features/cards/api/cardsApi'
import { cardsActions } from '@/features/cards/modal/cardsSlice'
import { CardsTable } from '@/features/cards/ui/cardsTable/cardsTable'
import { useGetDeckQuery } from '@/features/decks/api'
import { PackHeader } from '@/pages/deckPage/packHeader'

import s from './deckPage.module.scss'

import {
  selectCardsCurrentPage,
  selectCardsOuestion,
  selectCardsPageSize,
  selectCardsSortParams,
  selectSelectItems,
} from '../../features/cards/modal'

export const DeckPage = () => {
  const dispatch = useAppDispatch()
  const question = useAppSelector(selectCardsOuestion)
  const currentPage = useAppSelector(selectCardsCurrentPage)
  const sort = useAppSelector(selectCardsSortParams)
  const cardsPerPage = useAppSelector(selectCardsPageSize)
  const selectItems = useAppSelector(selectSelectItems)

  const { id = '' } = useParams<{ id: string }>()
  const queryParams = { id, params: { cardsPerPage, currentPage, question } }
  const { data: deckData, isLoading } = useGetCardsQuery(queryParams)
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })

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

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={s.root}>
      <GoBack className={s.link} title={'Back to Decks List'} />
      {deck && <PackHeader deck={deck} isEmptyCard={!!isEmptyCard} isOwner={isOwner} />}
      {isEmptyCard && (
        <div>
          <TextField className={s.input} placeholder={'Input search'} type={'search'} />
          <CardsTable
            cards={deckData?.items || []}
            isOwner={isOwner}
            onSort={onChangeSort}
            sort={sort}
          />
          <Pagination
            count={deckData?.pagination.totalItems || 1}
            onChange={onChangeSetPage}
            onPerPageChange={onChangeSetCardsPerPage}
            page={currentPage}
            perPage={cardsPerPage}
            perPageOptions={selectItems}
          />
        </div>
      )}
      {!isEmptyCard && (
        <>
          <Table.Empty text={'This pack is empty. Click add new card to fill this pack'} />
          <Table.Empty>
            <Button>
              <Typography variant={'subtitle2'}>Add New Card</Typography>
            </Button>
          </Table.Empty>
        </>
      )}
    </div>
  )
}
