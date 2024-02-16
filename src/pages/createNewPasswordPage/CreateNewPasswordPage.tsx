import { useNavigate, useParams } from 'react-router-dom'

import { useResetPasswordMutation } from '@/features/auth/api'
import { CreateNewPasswordForm } from '@/features/createNewPasswordForm'

export const CreateNewPasswordPage = () => {
  const navigate = useNavigate()
  const { token } = useParams<{ token: string }>()
  const [resetPassword] = useResetPasswordMutation()

  const onSubmit = (data: { password: string }) => {
    if (token) {
      resetPassword({ ...data, token }).then(() => {
        navigate('/v1/sign-in')
      })
    }
  }

  return <CreateNewPasswordForm onSubmit={onSubmit} />
}
