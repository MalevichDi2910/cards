import { GoBack } from '@/components/ui/goBack'
import { useMeQuery, useUpdateProfileMutation } from '@/features/auth/api'
import {
  PersonalInfo,
  PersonalInfoFormValues,
  ProfileDataType,
} from '@/features/personal-information'

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
    <>
      <GoBack title={'Back to Decks List'} />
      <PersonalInfo
        onLoadFileCover={onUpdateAvatar}
        update={onUpdateProfile}
        user={data as ProfileDataType}
      />
    </>
  )
}
