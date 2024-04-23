import { useNavigate } from 'react-router-dom'

import { PlayCircle } from '@/assets/icons/playCircle'
import { GetDecksResponseItems } from '@/common/services/api/flashcards.types'
import { DropDownItem, DropDownItemWithIcon, DropDownSeparator } from '@/components/ui/dropDownMenu'
import { Typography } from '@/components/ui/typography'
import { DeleteDeck } from '@/features/decks/ui/delete-deck'
import { EditDeck } from '@/features/decks/ui/edit-deck'

type Props = {
  deck: GetDecksResponseItems
}
export const DropDownDeckTools = ({ deck }: Props) => {
  const navigate = useNavigate()
  const toLearnDeck = () => {
    navigate(`/decks/${deck.id}/learn`)
  }

  return (
    <>
      <DropDownItemWithIcon
        disable={false}
        icon={<PlayCircle size={1} />}
        onSelect={toLearnDeck}
        text={'Learn'}
      />
      <DropDownSeparator />
      <DropDownItem asChild disable={false} onSelect={() => {}}>
        <EditDeck deckId={deck.id} isPrivate={deck.isPrivate} name={deck.name} />
        <Typography variant={'caption'}>{'Edit'}</Typography>
      </DropDownItem>
      <DropDownSeparator />
      <DropDownItem asChild disable={false} onSelect={() => {}}>
        <DeleteDeck deckId={deck.id} name={deck.name} />
        <Typography variant={'caption'}>{'Delete'}</Typography>
      </DropDownItem>
    </>
  )
}
