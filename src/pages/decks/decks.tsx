import { useState } from 'react'

import { useCreateDeckMutation, useGetDecksQuery } from '@/common/services/decks'
import { Header } from '@/components/ui/header'
import { Pagination } from '@/components/ui/pagination'
import { Sort } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/features/auth/api'
import { FilterForDecks } from '@/pages/decks/filter-for-decks'
import { AddPack } from '@/pages/decks/modals/modals-for-decks/add-pack'
import { TableForDecks } from '@/pages/decks/table-for-decks'

import s from './decks.module.scss'

export const Decks = () => {
  const [showMyDecks, setShowMyDecks] = useState<boolean>(false)
  const [sort, setSort] = useState<Sort | null>({ direction: 'desc', key: 'updated' })
  const sortedString = sort ? `${sort.key}-${sort.direction}` : null
  const [search, setSearch] = useState<string>('')
  const [range, setRange] = useState<number[]>([0, 100])
  const [page, setPage] = useState<number>(1)
  const [cardsPerPage, setCardsPerPage] = useState<number>(10)

  const { data: user } = useMeQuery()
  const [createDeck, deckCreationStatus] = useCreateDeckMutation()
  const {
    data: decks,
    error,
    isLoading,
  } = useGetDecksQuery({
    authorId: showMyDecks ? user?.id : undefined,
    currentPage: page,
    itemsPerPage: cardsPerPage,
    maxCardsCount: range[1],
    minCardsCount: range[0],
    name: search,
    orderBy: sortedString,
  })

  if (isLoading) {
    return <Typography variant={'h1'}>Loading...</Typography>
  }

  if (error) {
    return (
      <Typography as={'h1'} variant={'h1'}>
        ERROR
      </Typography>
    )
  }

  return (
    <>
      <Header isLoggedIn user={{ email: 'mal', name: 'di', src: '' }} />
      <div className={s.container}>
        <div className={s.title}>
          <Typography variant={'large'}>Packs list</Typography>
          <AddPack
            disabled={deckCreationStatus.isLoading}
            onCreateDeck={() => createDeck({ name: 'New deck' })}
          />
        </div>
        <FilterForDecks
          range={range}
          search={search}
          setCardsPerPage={setCardsPerPage}
          setPage={setPage}
          setRange={setRange}
          setSearch={setSearch}
          setShowMyDecks={setShowMyDecks}
          showMyDecks={showMyDecks}
        />
        <TableForDecks decks={decks} setSort={setSort} sort={sort} />
        <Pagination
          count={decks?.pagination?.totalPages || 1}
          onChange={setPage}
          onPerPageChange={setCardsPerPage}
          page={page}
          perPage={cardsPerPage}
        />
      </div>
    </>
  )
}
