import type { Meta, StoryObj } from '@storybook/react'

import { Delete } from '@/assets/icons/delete'
import { Edit } from '@/assets/icons/edit'
import LogOut from '@/assets/icons/logOut'
import PersonIcon from '@/assets/icons/personIcon'
import { PlayCircle } from '@/assets/icons/playCircle'
import { Avatar } from '@/components/ui/avatar'
import { DropDownItem, DropDownItemWithIcon } from '@/components/ui/dropDownMenu/dropDownItem'
import { DropDownMenu } from '@/components/ui/dropDownMenu/dropDownMenu'
import { DropDownSeparator } from '@/components/ui/dropDownMenu/dropDownSeparator'
import { Typography } from '@/components/ui/typography'

import s from './dropDownMenu.module.scss'

const meta = {
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
    },
  },
  component: DropDownMenu,
  decorators: [Story => <div style={{ margin: ' 0 auto', maxWidth: '300px' }}>{Story()}</div>],
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
        <DropDownItem asChild disable onSelect={() => {}}>
          <div className={s.photoAndEmail}>
            <Avatar size={'small'} src={user.src} userName={user.name} />
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
          disable={false}
          icon={<PersonIcon className={s.icon} size={1} />}
          onSelect={() => {}}
          text={'My Profile'}
        />
        <DropDownSeparator />
        <DropDownItemWithIcon
          disable={false}
          icon={<LogOut size={1} />}
          onSelect={() => {}}
          text={'Sign Out'}
        />
      </>
    ),
    trigger: <Avatar size={'small'} src={user.src} userName={user.name} />,
  },
}
export const MoreInfo: Story = {
  args: {
    children: (
      <>
        <DropDownItemWithIcon
          disable
          icon={<PlayCircle size={1} />}
          onSelect={() => {}}
          text={'Learn'}
        />
        <DropDownSeparator />
        <DropDownItemWithIcon disable icon={<Edit size={1} />} onSelect={() => {}} text={'Edit'} />
        <DropDownSeparator />
        <DropDownItemWithIcon
          disable
          icon={<Delete size={1} />}
          onSelect={() => {}}
          text={'Delete'}
        />
      </>
    ),
  },
}
