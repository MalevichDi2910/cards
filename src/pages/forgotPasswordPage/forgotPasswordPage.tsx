import { useNavigate } from 'react-router-dom'

import { useRecoverPasswordMutation } from '@/features/auth/api'
import { ForgotPasswordForm } from '@/features/forgot-password'
import { ForgotPasswordFormValues } from '@/features/forgot-password/forgot-password-schema'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    await recoverPassword({
      ...data,
      html: `<h1>Hi, ##name##</h1><p>Click <a href="https://flashcards-projectt.vercel.app/create-new-password/##token##">here</a> to recover your password</p>`,
    })
    navigate(`/check-email/${data.email}`)
  }

  return <ForgotPasswordForm onSubmit={onSubmit} />
}
