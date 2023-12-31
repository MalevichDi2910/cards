import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit } from '@/assets/icons/edit'
import LogOut from '@/assets/icons/logOut'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { Typography } from '@/components/ui/typography'
import {
  PersonalInfoFormValues,
  PersonalInfoSchema,
} from '@/features/personal-information/personal-info-schema'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './personal-info.module.scss'

type Props = {
  user: { email: string; name: string; src: string }
}

export const PersonalInfo = ({ user }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PersonalInfoFormValues>({ resolver: zodResolver(PersonalInfoSchema) })

  const onSubmit = handleSubmit(data => {
    console.log(data)
    setEditMode(false)
  })

  const [editMode, setEditMode] = useState<boolean>(false)

  const onChangeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    console.log(file)
    if (!file) {
      return
    }
  }

  return (
    <Card variant={'dark'}>
      <Typography variant={'large'}>Personal Information</Typography>
      <div className={s.avatarWithIconWrapper}>
        <form className={s.avatarWithIcon}>
          <Avatar size={'large'} src={user.src} userName={user.name}></Avatar>
          <Button
            as={'label'}
            className={s.editButton}
            htmlFor={'photoInput'}
            variant={'secondary'}
          >
            <Edit />
            <input
              id={'photoInput'}
              name={'file'}
              onChange={onChangeAvatarHandler}
              style={{ display: 'none' }}
              type={'file'}
            />
          </Button>
        </form>
      </div>
      {editMode && (
        <form className={s.editBottomWrapper} onSubmit={onSubmit}>
          <DevTool control={control} />
          <ControlledTextField
            control={control}
            errorMessage={errors.nickname?.message}
            fullWidth
            label={'Nickname'}
            name={'nickname'}
            placeholder={user.name}
          />
          <Button className={s.saveButton} fullWidth variant={'primary'}>
            Save Changes
          </Button>
        </form>
      )}
      {!editMode && (
        <div className={s.bottomWrapper}>
          <div className={s.nameAndIcon}>
            <Typography className={s.name} variant={'h1'}>
              {user.name}
            </Typography>
            <Edit
              as={'button'}
              onClick={() => {
                setEditMode(!editMode)
              }}
            />
          </div>
          <Typography className={s.email} variant={'body2'}>
            {user.email}
          </Typography>
          <Button className={s.logoutButton} variant={'secondary'}>
            <LogOut size={1} />
            Logout
          </Button>
        </div>
      )}
    </Card>
  )
}
