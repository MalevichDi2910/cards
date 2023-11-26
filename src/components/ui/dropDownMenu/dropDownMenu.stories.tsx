import type { Meta, StoryObj } from '@storybook/react'

import DeleteIcon from '@/assets/icons/deleteIcon'
import EditIcon from '@/assets/icons/editIcon'
import LogOut from '@/assets/icons/logOut'
import MoreInfoIcon from '@/assets/icons/moreInfoIcon'
import PersonIcon from '@/assets/icons/personIcon'
import PlayIcon from '@/assets/icons/playIcon'
import { Avatar } from '@/components/ui/avatar'
import { DropDownItem } from '@/components/ui/dropDownMenu/dropDownItem'
import { DropDownMenu } from '@/components/ui/dropDownMenu/dropDownMenu'
import { DropDownSeparator } from '@/components/ui/dropDownMenu/dropDownSeparator'
import { Typography } from '@/components/ui/typography'

import s from './dropDownMenu.module.scss'

const meta = {
  component: DropDownMenu,
  decorators: [Story => <div style={{ margin: 'auto', maxWidth: '300px' }}>{Story()}</div>],
  tags: ['autodocs'],
  title: 'Components/UI/DropdownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

const user = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
}

export const UserInfo: Story = {
  args: {
    children: (
      <div>
        <DropDownItem asChild>
          <div className={s.photoAndEmail}>
            <Avatar className={s.icon} size={'small'} userName={user.name} />
            <div className={s.nameAndEmail}>
              <Typography as={'div'} className={s.userName} variant={'subtitle2'}>
                {user.name}
              </Typography>
              <div className={s.userEmail}>
                <Typography as={'div'} variant={'caption'}>
                  {user.email}
                </Typography>
              </div>
            </div>
          </div>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <a className={s.button} href={'profilePageHref'}>
            <PersonIcon className={s.icon} color={'white'} height={16} width={16} />
            My Profile
          </a>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <a className={s.button} href={'profilePageHref'}>
            <LogOut className={s.icon} color={'white'} height={16} width={16} />
            Sign Out
          </a>
        </DropDownItem>
      </div>
    ),
    trigger: <Avatar size={'small'} userName={user.name} />,
  },
}
export const MoreInfo: Story = {
  args: {
    children: (
      <div>
        <DropDownItem>
          <button className={s.button} onClick={() => {}}>
            <PlayIcon className={s.icon} color={'white'} height={16} width={16} />
            Learn
          </button>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem>
          <button className={s.button} onClick={() => {}}>
            <EditIcon className={s.icon} color={'white'} height={16} width={16} />
            Edit
          </button>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem>
          <button className={s.button} onClick={() => {}}>
            <DeleteIcon className={s.icon} color={'white'} height={16} width={16} />
            Delete
          </button>
        </DropDownItem>
      </div>
    ),
    trigger: <MoreInfoIcon color={'white'} height={24} width={24} />,
  },
}
