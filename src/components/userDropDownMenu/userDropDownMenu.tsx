import LogOut from '@/assets/icons/logOut'
import PersonIcon from '@/assets/icons/personIcon'
import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'

import s from '../ui/dropDownMenu/dropDownMenu.module.scss'

import { DropDownItem, DropDownMenu, DropDownSeparator } from '../ui/dropDownMenu'

type Props = {
  email: string
  name: string
  profilePageHref: string
}

export const UserDropDownMenu = ({ email, name, profilePageHref }: Props) => {
  return (
    <div className={s.wrapper}>
      <DropDownMenu trigger={<Avatar size={'small'} src={''} userName={name} />}>
        <DropDownItem asChild>
          <div className={s.photoAndEmail}>
            <Avatar className={s.icon} size={'small'} src={''} userName={name} />
            <div className={s.nameAndEmail}>
              <Typography as={'div'} className={s.userName} variant={'subtitle2'}>
                {name}
              </Typography>
              <div className={s.userEmail}>
                <Typography as={'div'} variant={'caption'}>
                  {email}
                </Typography>
              </div>
            </div>
          </div>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <a className={s.link} href={profilePageHref}>
            <PersonIcon className={s.icon} color={'white'} height={'16'} width={'16'} />
            My Profile
          </a>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <a className={s.link} href={profilePageHref}>
            <LogOut className={s.icon} color={'white'} height={'16'} width={'16'} />
            Sign Out
          </a>
        </DropDownItem>
      </DropDownMenu>
    </div>
  )
}
