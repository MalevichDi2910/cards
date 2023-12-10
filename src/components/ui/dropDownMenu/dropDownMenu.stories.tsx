import type { Meta, StoryObj } from '@storybook/react'

import DeleteIcon from '@/assets/icons/deleteIcon'
import EditIcon from '@/assets/icons/editIcon'
import LogOut from '@/assets/icons/logOut'
import PersonIcon from '@/assets/icons/personIcon'
import PlayIcon from '@/assets/icons/playIcon'
import { Avatar } from '@/components/ui/avatar'
import { DropDownItem, DropDownItemWithIcon } from '@/components/ui/dropDownMenu/dropDownItem'
import { DropDownMenu } from '@/components/ui/dropDownMenu/dropDownMenu'
import { DropDownSeparator } from '@/components/ui/dropDownMenu/dropDownSeparator'
import { Typography } from '@/components/ui/typography'

import s from './dropDownMenu.module.scss'
import { PlayCircle } from '@/assets/icons/playCircle'
import { Edit } from '@/assets/icons/edit'
import { Delete } from '@/assets/icons/delete'

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
            <Avatar size={'small'} userName={user.name} />
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
            <PersonIcon className={s.icon} color={'white'} size={1.5} />
            <span className={s.text}>My Profile</span>
          </a>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <a className={s.button} href={'profilePageHref'}>
            <LogOut className={s.icon} color={'white'} size={1.5} />
            <span className={s.text}>Sign Out</span>
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
      <>
        <DropDownItemWithIcon icon={<PlayCircle size={1} />} text="Learn" onSelect={() => {}} />
        <DropDownSeparator />
        <DropDownItemWithIcon icon={<Edit size={1} />} text="Edit" onSelect={() => {}} />
        <DropDownSeparator />
        <DropDownItemWithIcon icon={<Delete size={1} />} text="Delete" onSelect={() => {}} />
      </>
    ),
  },
}
