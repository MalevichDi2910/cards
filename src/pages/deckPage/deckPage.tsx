import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { GoBack } from '@/components/ui/goBack'
import { Sort, Table } from '@/components/ui/table'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/features/auth/api/authApi'
import { useGetCardsQuery } from '@/features/cards/api/cardsApi'
import {
  selectCardsCurrentPage,
  selectCardsOuestion,
  selectCardsPageSize,
  selectCardsSortParams,
} from '@/features/cards/modal'
import { CardsTable } from '@/features/cards/ui/cardsTable/cardsTable'
import { useGetDeckQuery } from '@/features/decks/api'
import { PackHeader } from '@/pages/deckPage/packHeader'

type Props = {
  sort: Sort
}
export const DeckPage = ({ sort }: Props) => {
  const question = useSelector(selectCardsOuestion)
  const currentPage = useSelector(selectCardsCurrentPage)
  const sortParams = useSelector(selectCardsSortParams)
  const pageSize = useSelector(selectCardsPageSize)

  const { id = '' } = useParams<{ id: string }>()
  const queryParams = { id, params: { currentPage, pageSize, question, sortParams } }
  const { data: deckData } = useGetCardsQuery(queryParams)
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })

  const isOwner = user?.id === deck?.userId
  const isEmptyCard = deck && deck.cardsCount > 0
  const onChangeSort = (sort: Sort) => {}

  return (
    <div>
      <GoBack title={'Back to Decks List'} />
      {deck && <PackHeader deck={deck} isEmptyCard={isEmptyCard} isOwner={isOwner} />}
      {isEmptyCard && (
        <div>
          <TextField placeholder={'Input search'} type={'search'} />
          <CardsTable
            cards={deckData?.items || []}
            isOwner={isOwner}
            onSort={onChangeSort}
            sort={sort}
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
