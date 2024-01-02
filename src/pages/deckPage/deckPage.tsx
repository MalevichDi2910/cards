import { useParams } from 'react-router-dom'

import { GoBack } from '@/components/ui/goBack'
import { Sort } from '@/components/ui/table'
import { TextField } from '@/components/ui/textField'
import { useMeQuery } from '@/features/auth/api/authApi'
import { useGetCardsQuery } from '@/features/cards/api/cardsApi'
import { CardsTable } from '@/features/cards/ui/cardsTable/cardsTable'
import { useGetDeckQuery } from '@/features/decks/api'
import { PackHeader } from '@/pages/deckPage/packHeader'

type Props = {
  sort: Sort
}
export const DeckPage = ({ sort }: Props) => {
  const onChangeSort = (sort: Sort) => {}

  const { id } = useParams<{ id: string }>()
  const queryParams = { id, params: {} }
  const { data: deckData } = useGetCardsQuery(queryParams)
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })

  const isOwner = user?.id === deck?.userId

  return (
    <div>
      <GoBack title={'Back to Decks List'} />
      {deck && <PackHeader isOwner={isOwner} />}
      <div>
        <TextField placeholder={'Input search'} type={'search'} />
        <CardsTable
          cards={deckData?.items || []}
          isOwner={isOwner}
          onSort={onChangeSort}
          sort={sort}
        />
      </div>
    </div>
  )
}
