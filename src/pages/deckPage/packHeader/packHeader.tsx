import { Link } from 'react-router-dom'

import { GetDecksResponseItems } from '@/common/services/api/flashcards.types'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/dropDownMenu'
import { Typography } from '@/components/ui/typography'
import { DropDownDeckTools } from '@/pages/deckPage/dropDownDeckTools'

import s from './packHeader.module.scss'

type Props = {
  deck: GetDecksResponseItems
  isEmptyCard: boolean
  isOwner: boolean
}
export const PackHeader = ({ deck, isEmptyCard, isOwner }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.deckOwnerWrapper}>
        <Typography as={'h1'} variant={'large'}>
          {isOwner && isEmptyCard ? 'My Pack' : 'Friends Pack'}
          {!isEmptyCard && `${deck.name} Pack `}
        </Typography>
        {isOwner && (
          <DropDownMenu>
            <DropDownDeckTools deck={deck} />
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
