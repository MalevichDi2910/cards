import { Navigate } from 'react-router-dom'

import { useAuthContext } from '@/common/layout/layout'
import { LoginRequestType, useLoginMutation } from '@/features/auth/api'
import { SignInForm } from '@/features/signInForm'

export const SignInPage = () => {
  const [login] = useLoginMutation()

  const { isAuthenticated } = useAuthContext()
  const loginHandler = async (loginData: LoginRequestType) => {
    try {
      await login(loginData)
    } catch (e) {
      console.error(e)
    }
  }

  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }

  return <SignInForm onSubmit={loginHandler} />
}
