import { Navigate, Outlet } from 'react-router-dom'

import { Loader } from '@/components/ui/loader'
import { useMeQuery } from '@/features/auth/api'

export const PrivateRoutes = () => {
  const { isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError

  if (isLoading) {
    return <Loader />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/v1/sign-in'} />
}
