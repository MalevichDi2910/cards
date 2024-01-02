import { Link } from 'react-router-dom'

import { GetDecksResponseItems } from '@/common/services/api/flashcards.types'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/dropDownMenu'
import { Typography } from '@/components/ui/typography'
import { DropDownDeckTools } from '@/pages/deckPage/dropDownDeckTools'

type Props = {
  deck: GetDecksResponseItems
  isOwner: boolean
}
export const PackHeader = ({ deck, isOwner }: Props) => {
  return (
    <div>
      <div>
        <Typography as={'h1'} variant={'large'}>
          {isOwner ? 'My Deck' : 'Friends Deck'}
        </Typography>
        {isOwner && (
          <DropDownMenu>
            <DropDownDeckTools />
          </DropDownMenu>
        )}
      </div>
      {isOwner && (
        <Button>
          <Typography variant={'subtitle2'}>Add New Card</Typography>
        </Button>
      )}
      {!isOwner && (
        <Button as={Link} to={`v1/decks/${deck.id}/learn`}>
          <Typography variant={'subtitle2'}>Learn to Pack</Typography>
        </Button>
      )}
    </div>
  )
}
