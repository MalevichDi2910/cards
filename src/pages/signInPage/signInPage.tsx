import { Navigate } from 'react-router-dom'

import { Loader } from '@/components/ui/loader'
import { LoginRequestType, useLoginMutation, useMeQuery } from '@/features/auth/api'
import { SignInForm } from '@/features/signInForm'

export const SignInPage = () => {
  const { isError, isLoading } = useMeQuery()
  const [login] = useLoginMutation()

  const isAuthenticated = !isError

  const loginHandler = (loginData: LoginRequestType) => {
    login(loginData)
  }

  if (isLoading) {
    return <Loader />
  }

  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }

  return <SignInForm onSubmit={loginHandler} />
}
