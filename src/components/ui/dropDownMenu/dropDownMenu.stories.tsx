import type { Meta, StoryObj } from '@storybook/react'
import LogOut from '@/assets/icons/logOut'
import PersonIcon from '@/assets/icons/personIcon'
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
  src: 'https://i.pinimg.com/564x/3a/52/1d/3a521da0debc5ff73da0df432395c64f.jpg',
}

export const UserInfo: Story = {
  args: {
    children: (
      <>
        <DropDownItem onSelect={() => {}} asChild>
          <div className={s.photoAndEmail}>
            <Avatar size={'small'} userName={user.name} src={user.src} />
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
        <DropDownItemWithIcon
          icon={<PersonIcon className={s.icon} size={1} />}
          text="My Profile"
          onSelect={() => {}}
        />
        <DropDownSeparator />
        <DropDownItemWithIcon icon={<LogOut size={1} />} text="Sign Out" onSelect={() => {}} />
      </>
    ),
    trigger: <Avatar size={'small'} userName={user.name} src={user.src} />,
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
