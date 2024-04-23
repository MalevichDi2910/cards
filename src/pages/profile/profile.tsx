import { GoBack } from '@/components/ui/goBack'
import { useMeQuery, useUpdateProfileMutation } from '@/features/auth/api'
import {
  PersonalInfo,
  PersonalInfoFormValues,
  ProfileDataType,
} from '@/features/personal-information'

import s from './profile.module.scss'

export const Profile = () => {
  const { data } = useMeQuery()
  const [updateProfile] = useUpdateProfileMutation()

  const onUpdateProfile = async (data: PersonalInfoFormValues) => {
    const formData = new FormData()

    formData.append('name', data.name)
    await updateProfile(formData)
  }

  const onUpdateAvatar = async (data: File) => {
    const formData = new FormData()

    await formData.append('avatar', data)

    updateProfile(formData)
  }

  return (
    <div className={s.root}>
      <GoBack className={s.link} title={'Back to Decks List'} />
      <PersonalInfo
        data={data as ProfileDataType}
        onLoadFileCover={onUpdateAvatar}
        update={onUpdateProfile}
      />
    </div>
  )
}
