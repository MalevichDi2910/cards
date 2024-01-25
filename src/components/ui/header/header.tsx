import { useNavigate } from 'react-router-dom'

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
import c from '@/components/ui/dropDownMenu/dropDownMenu.module.scss'

export type HeaderProps = {
  isLoggedIn?: boolean
  user?: { email?: string; name?: string; src?: null | string }
}
export const Header = ({ isLoggedIn, user }: HeaderProps) => {
  const navigate = useNavigate()

  const signOutOfProfile = () => {
    navigate('v1/sign-in')
  }

  const goToMyProfile = () => {
    navigate('v1/profile')
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <ItIncubator height={'36'} width={'157'} />
        {isLoggedIn && user && (
          <div className={s.nameWithDropDown}>
            <Typography className={s.text} variant={'subtitle1'}>
              {user.name}
            </Typography>
            <DropDownMenu
              align={'end'}
              trigger={
                <Avatar
                  className={c.avatar}
                  size={'small'}
                  src={user.src!}
                  userName={user.name!}
                ></Avatar>
              }
            >
              <DropDownItem asChild onSelect={() => {}}>
                <div className={c.photoAndEmail}>
                  <Avatar size={'small'} src={user.src!} userName={user.name!} />
                  <div className={c.nameAndEmail}>
                    <Typography as={'div'} className={c.userName} variant={'subtitle2'}>
                      {user.name}
                    </Typography>
                    <div className={c.userEmail}>
                      <Typography as={'div'} variant={'caption'}>
                        {user.email}
                      </Typography>
                    </div>
                  </div>
                </div>
              </DropDownItem>
              <DropDownSeparator />
              <DropDownItemWithIcon
                icon={<PersonIcon className={c.icon} size={1} />}
                onClick={goToMyProfile}
                onSelect={() => {}}
                text={'My Profile'}
              />
              <DropDownSeparator />
              <DropDownItemWithIcon
                icon={<LogOut size={1} />}
                onClick={signOutOfProfile}
                onSelect={() => {}}
                text={'Sign Out'}
              />
            </DropDownMenu>
          </div>
        )}
        {!isLoggedIn && <Button variant={'primary'}>Sign In</Button>}
      </div>
    </div>
  )
}
