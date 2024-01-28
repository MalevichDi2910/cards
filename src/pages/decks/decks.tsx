import { useParams } from 'react-router-dom'

import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
} from '@/common/services/decks'
import { useAppDispatch, useAppSelector } from '@/common/services/store'
import { Loader } from '@/components/ui/loader'
import { Pagination } from '@/components/ui/pagination'
import { Sort } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/features/auth/api'
import {
  decksActions,
  selectDecksCurrentPage,
  selectDecksPageSize,
  selectDecksRange,
  selectDecksSelectItems,
  selectDecksSort,
  selectSearch,
  selectShowMyDecks,
} from '@/features/decks/model'
import { FilterForDecks } from '@/pages/decks/filter-for-decks'
import { AddDeck } from '@/pages/decks/modals/modals-for-decks/add-deck'
import { TableForDecks } from '@/pages/decks/table-for-decks'

import s from './decks.module.scss'

export const Decks = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(selectDecksCurrentPage)
  const pageSize = useAppSelector(selectDecksPageSize)
  const range = useAppSelector(selectDecksRange)
  const search = useAppSelector(selectSearch)
  const selectItems = useAppSelector(selectDecksSelectItems)
  const showMyDecks = useAppSelector(selectShowMyDecks)
  const sort = useAppSelector(selectDecksSort)

  const sortedString = sort ? `${sort.key}-${sort.direction}` : null

  const { id = '' } = useParams<{ id: string }>()
  const { data: user } = useMeQuery()
  const [createDeck, deckCreationStatus] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  const removeDeck = (deckId: string) => {
    deleteDeck(deckId)
  }

  const {
    data: decks,
    error,
    isLoading,
  } = useGetDecksQuery({
    authorId: showMyDecks ? user?.id : undefined,
    currentPage: currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: range[1],
    minCardsCount: range[0],
    name: search,
    orderBy: sortedString,
  })

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <Typography as={'h1'} variant={'h1'}>
        ERROR
      </Typography>
    )
  }

  const onChangeSetPage = (currentPage: number) => {
    dispatch(decksActions.setCurrentPage({ currentPage }))
  }

  const onChangeSetCardsPerPage = (pageSize: string) => {
    dispatch(decksActions.setPageSize({ pageSize: Number(pageSize) }))
  }

  const onChangeSetRange = (range: number[]) => {
    dispatch(decksActions.setRange({ range }))
  }

  const onChangeSort = (sortParams: Sort) => {
    dispatch(decksActions.setSort({ sortParams }))
  }

  const onChangeSetShowMyDecks = (showMyDecks: boolean) => {
    dispatch(decksActions.setShowMyDecks({ showMyDecks }))
  }

  const onChangeSetSearch = (search: string) => {
    dispatch(decksActions.setSearch({ search }))
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.title}>
          <Typography variant={'large'}>Packs list</Typography>
          <AddDeck
            disabled={deckCreationStatus.isLoading}
            onCreateDeck={() => createDeck({ name: 'New deck' })}
          />
        </div>
        <FilterForDecks
          range={range}
          search={search}
          setCardsPerPage={onChangeSetCardsPerPage}
          setPage={onChangeSetPage}
          setRange={onChangeSetRange}
          setSearch={onChangeSetSearch}
          setShowMyDecks={onChangeSetShowMyDecks}
          showMyDecks={showMyDecks}
        />
        {decks && decks.items.length > 0 && (
          <>
            <TableForDecks
              decks={decks}
              removeDeck={() => removeDeck(id)}
              setSort={onChangeSort}
              sort={sort}
            />
            <Pagination
              count={decks?.pagination?.totalPages || 1}
              onChange={onChangeSetPage}
              onPerPageChange={onChangeSetCardsPerPage}
              page={currentPage}
              perPage={pageSize}
              perPageOptions={selectItems}
            />
          </>
        )}
      </div>
    </>
  )
}
