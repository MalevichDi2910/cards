import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/dropDownMenu'
import { Typography } from '@/components/ui/typography'
import { DropDownDeckTools } from '@/pages/deckPage/dropDownDeckTools'

type Props = {
  isOwner: boolean
}
export const PackHeader = ({ isOwner }: Props) => {
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
    </div>
  )
}
