import { useParams } from 'react-router-dom'

import ArrowIosBack from '@/assets/icons/arrowIosBack'
import { Delete } from '@/assets/icons/delete'
import { Edit } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playCircle'
import { Button } from '@/components/ui/button'
import { DropDownItemWithIcon, DropDownMenu, DropDownSeparator } from '@/components/ui/dropDownMenu'
import { Sort } from '@/components/ui/table'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/features/auth/api/authApi'
import { useGetCardsQuery } from '@/features/cards/api/cardsApi'
import { CardsTable } from '@/features/cards/ui/cardsTable/cardsTable'
import { useGetDeckQuery } from '@/features/decks/api'

type Props = {
  sort: Sort
}
export const DeckPage = ({ sort }: Props) => {
  const goBack = () => {}
  const onChangeSort = (sort: Sort) => {}

  const { id } = useParams<{ id: string }>()
  const queryParams = { id, params: {} }
  const { data: deckData } = useGetCardsQuery(queryParams)
  const { data: user } = useMeQuery()
  const { data: deck } = useGetDeckQuery({ id })

  const isOwner = user?.id === deck?.userId

  return (
    <div>
      <Button onClick={goBack} variant={'link'}>
        <ArrowIosBack size={1} />
        Back to Decks List
      </Button>
      <div>
        <div>
          <Typography as={'h1'} variant={'large'}>
            {isOwner ? 'My Deck' : 'Friends Deck'}
          </Typography>
          {isOwner && (
            <DropDownMenu>
              <>
                <DropDownItemWithIcon
                  icon={<PlayCircle size={1} />}
                  onSelect={() => {}}
                  text={'Learn'}
                />
                <DropDownSeparator />
                <DropDownItemWithIcon icon={<Edit size={1} />} onSelect={() => {}} text={'Edit'} />
                <DropDownSeparator />
                <DropDownItemWithIcon
                  icon={<Delete size={1} />}
                  onSelect={() => {}}
                  text={'Delete'}
                />
              </>
            </DropDownMenu>
          )}
        </div>
        {isOwner && (
          <Button>
            <Typography variant={'subtitle2'}>Add New Card</Typography>
          </Button>
        )}
      </div>
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
