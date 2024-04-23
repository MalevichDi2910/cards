import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit } from '@/assets/icons/edit'
import LogOut from '@/assets/icons/logOut'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textField'
import { Typography } from '@/components/ui/typography'
import { useLogoutMutation } from '@/features/auth/api'
import {
  PersonalInfoFormValues,
  PersonalInfoSchema,
} from '@/features/personal-information/personal-info-schema'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './personal-info.module.scss'
export type ProfileDataType = {
  avatar?: string
  email: string
  name: string
}

type Props = {
  data: ProfileDataType
  onLoadFileCover: (data: File) => void
  update: (data: PersonalInfoFormValues) => void
}

export const PersonalInfo = ({ data, onLoadFileCover, update }: Props) => {
  const { avatar, email, name } = data
  const [editMode, setEditMode] = useState<boolean>(false)
  const [logout] = useLogoutMutation()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PersonalInfoFormValues>({
    defaultValues: {
      name,
    },
    resolver: zodResolver(PersonalInfoSchema),
  })
  const onSubmitHandler = (data: PersonalInfoFormValues) => {
    update(data)
    setEditMode(false)
  }
  const logOut = () => {
    logout()
  }
  const onChangeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      onLoadFileCover(file)
    }
  }

  return (
    <Card variant={'dark'}>
      <Typography variant={'large'}>Personal Information</Typography>
      <div className={s.avatarWithIconWrapper}>
        <form className={s.avatarWithIcon}>
          <Avatar size={'large'} src={avatar} userName={name}></Avatar>
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
        <form className={s.editBottomWrapper} onSubmit={handleSubmit(onSubmitHandler)}>
          <DevTool control={control} />
          <ControlledTextField
            control={control}
            errorMessage={errors.name?.message}
            fullWidth
            label={'Nickname'}
            name={'name'}
          />
          <Button className={s.saveButton} fullWidth type={'submit'} variant={'primary'}>
            Save Changes
          </Button>
        </form>
      )}
      {!editMode && (
        <div className={s.bottomWrapper}>
          <div className={s.nameAndIcon}>
            <Typography className={s.name} variant={'h1'}>
              {name}
            </Typography>
            <Edit
              as={'button'}
              onClick={() => {
                setEditMode(!editMode)
              }}
            />
          </div>
          <Typography className={s.email} variant={'body2'}>
            {email}
          </Typography>
          <Button className={s.logoutButton} onClick={logOut} variant={'secondary'}>
            <LogOut size={1} />
            Logout
          </Button>
        </div>
      )}
    </Card>
  )
}
