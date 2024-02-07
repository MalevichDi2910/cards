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

  return <PersonalInfo update={onUpdateProfile} user={data as ProfileDataType} />
}
