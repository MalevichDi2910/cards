import { useNavigate } from 'react-router-dom'

import { Delete } from '@/assets/icons/delete'
import { Edit } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playCircle'
import { GetDecksResponseItems } from '@/common/services/api/flashcards.types'
import { DropDownItemWithIcon, DropDownSeparator } from '@/components/ui/dropDownMenu'

type Props = {
  deck: GetDecksResponseItems
}
export const DropDownDeckTools = ({ deck }: Props) => {
  const navigate = useNavigate()
  const toLearnDeck = () => {
    navigate(`v1/decks/${deck.id}/learn`)
  }

  return (
    <>
      <DropDownItemWithIcon icon={<PlayCircle size={1} />} onSelect={toLearnDeck} text={'Learn'} />
      <DropDownSeparator />
      <DropDownItemWithIcon icon={<Edit size={1} />} onSelect={() => {}} text={'Edit'} />
      <DropDownSeparator />
      <DropDownItemWithIcon icon={<Delete size={1} />} onSelect={() => {}} text={'Delete'} />
    </>
  )
}
