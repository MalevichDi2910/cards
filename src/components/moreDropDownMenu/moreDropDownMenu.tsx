import DeleteIcon from '@/assets/icons/deleteIcon'
import EditIcon from '@/assets/icons/editIcon'
import MoreInfoIcon from '@/assets/icons/moreInfoIcon'
import PlayIcon from '@/assets/icons/playIcon'

import s from '../moreDropDownMenu/moreDropDownMenu.module.scss'

import { DropDownItem, DropDownMenu, DropDownSeparator } from '../ui/dropDownMenu'

export const MoreDropDownMenu = () => {
  return (
    <div className={s.wrapper}>
      <DropDownMenu trigger={<MoreInfoIcon color={'white'} height={24} width={24} />}>
        <DropDownItem asChild>
          <button className={s.button} onClick={() => {}}>
            <PlayIcon className={s.icon} color={'white'} height={16} width={16} />
            Learn
          </button>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <button className={s.button} onClick={() => {}}>
            <EditIcon className={s.icon} color={'white'} height={16} width={16} />
            Edit
          </button>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <button className={s.button} onClick={() => {}}>
            <DeleteIcon className={s.icon} color={'white'} height={16} width={16} />
            Delete
          </button>
        </DropDownItem>
      </DropDownMenu>
    </div>
  )
}
