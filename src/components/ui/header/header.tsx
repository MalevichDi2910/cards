import ItIncubator from '@/assets/icons/itIncubator'
import LogOut from '@/assets/icons/logOut'
import PersonIcon from '@/assets/icons/personIcon'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropDownItem,
  DropDownItemWithIcon,
  DropDownMenu,
  DropDownSeparator,
} from '@/components/ui/dropDownMenu'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

export type HeaderProps = {
  isLoggedIn?: boolean
  user?: { email: string; name: string; src: string }
}
export const Header = ({ isLoggedIn, user }: HeaderProps) => {
  return (
    <div className={s.headerContainer}>
      <ItIncubator height={'36'} width={'157'} />
      {isLoggedIn && user && (
        <div className={s.nameWithDropDown}>
          <Typography className={s.text} variant={'h3'}>
            {user.name}
          </Typography>
          <DropDownMenu
            trigger={
              <Avatar
                className={s.avatar}
                size={'small'}
                src={user.src}
                userName={user.name}
              ></Avatar>
            }
          >
            <DropDownItem asChild onSelect={() => {}}>
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
              icon={<PersonIcon className={s.icon} size={1} />}
              onSelect={() => {}}
              text={'My Profile'}
            />
            <DropDownSeparator />
            <DropDownItemWithIcon
              icon={<LogOut size={1} />}
              onSelect={() => {}}
              text={'Sign Out'}
            />
          </DropDownMenu>
        </div>
      )}
      {!isLoggedIn && <Button variant={'primary'}>Sign In</Button>}
    </div>
  )
}
