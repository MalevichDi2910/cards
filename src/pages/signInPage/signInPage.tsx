import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAuthContext } from '@/common/layout/layout'
import { LoginRequestType, useLoginMutation } from '@/features/auth/api'
import { SignInForm } from '@/features/signInForm'

export const SignInPage = () => {
  const [login] = useLoginMutation()

  const { isAuthenticated } = useAuthContext()
  const loginHandler = async (loginData: LoginRequestType) => {
    try {
      await login(loginData)
    } catch (error: any) {
      toast.error(error?.data?.message ?? 'Could not sign in')
    }
  }

  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }

  return <SignInForm onSubmit={loginHandler} />
}
