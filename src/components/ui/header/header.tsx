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
  logout: () => void
  user?: { email?: string; name?: string; src?: string }
}
export const Header = ({ isLoggedIn, logout, user }: HeaderProps) => {
  const navigate = useNavigate()
  const goToMyProfile = () => {
    navigate('/profile')
  }

  const goToSignIn = () => {
    navigate('/sign-in')
  }

  const goToDecks = () => {
    navigate('/')
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <ItIncubator className={s.logo} height={'36'} onClick={goToDecks} width={'157'} />
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
              <DropDownItem asChild disable onClick={goToMyProfile} onSelect={() => {}}>
                <div className={c.photoAndEmail}>
                  <Avatar size={'small'} src={user.src!} userName={user.name!} />
                  <div>
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
                disable={false}
                icon={<PersonIcon className={c.icon} size={1} />}
                onClick={goToMyProfile}
                onSelect={() => {}}
                text={'My Profile'}
              />
              <DropDownSeparator />
              <DropDownItemWithIcon
                disable={false}
                icon={<LogOut size={1} />}
                onSelect={logout}
                text={'Sign Out'}
              />
            </DropDownMenu>
          </div>
        )}
        {!isLoggedIn && (
          <Button onClick={goToSignIn} variant={'primary'}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  )
}
