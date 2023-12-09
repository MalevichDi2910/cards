import DeleteIcon from '@/assets/icons/deleteIcon'
import EditIcon from '@/assets/icons/editIcon'
import MoreInfoIcon from '@/assets/icons/moreInfoIcon'
import PlayIcon from '@/assets/icons/playIcon'

import s from '../ui/dropDownMenu/dropDownMenu.module.scss'

import { DropDownItem, DropDownMenu, DropDownSeparator } from '../ui/dropDownMenu'

export const MoreDropDownMenu = () => {
  return (
    <div className={s.wrapper}>
      <DropDownMenu trigger={<MoreInfoIcon color={'white'} size={1.5} />}>
        <DropDownItem asChild>
          <button className={s.button} onClick={() => {}}>
            <PlayIcon className={s.icon} color={'white'} size={1.5} />
            Learn
          </button>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <button className={s.button} onClick={() => {}}>
            <EditIcon className={s.icon} color={'white'} size={1.5} />
            Edit
          </button>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <button className={s.button} onClick={() => {}}>
            <DeleteIcon className={s.icon} color={'white'} size={1.5} />
            Delete
          </button>
        </DropDownItem>
      </DropDownMenu>
    </div>
  )
}
