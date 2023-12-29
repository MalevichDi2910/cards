import { Delete } from '@/assets/icons/delete'
import { Edit } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playCircle'
import { DropDownItemWithIcon, DropDownSeparator } from '@/components/ui/dropDownMenu'

export const DropDownDeckTools = () => {
  return (
    <>
      <DropDownItemWithIcon icon={<PlayCircle size={1} />} onSelect={() => {}} text={'Learn'} />
      <DropDownSeparator />
      <DropDownItemWithIcon icon={<Edit size={1} />} onSelect={() => {}} text={'Edit'} />
      <DropDownSeparator />
      <DropDownItemWithIcon icon={<Delete size={1} />} onSelect={() => {}} text={'Delete'} />
    </>
  )
}
