import { Outlet, useOutletContext } from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { Loader } from '@/components/ui/loader'
import { Toast } from '@/components/ui/toast/toast'
import { useLogoutMutation, useMeQuery } from '@/features/auth/api'

import 'react-toastify/dist/ReactToastify.css'

type AuthContext = {
  isAuthenticated: boolean
}

export function useAuthContext() {
  return useOutletContext<AuthContext>()
}

export const Layout = () => {
  const { data, isError, isLoading } = useMeQuery()
  const [logout] = useLogoutMutation()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Toast />
      <Header
        isLoggedIn={isAuthenticated}
        logout={logout}
        user={{ email: data?.email, name: data?.name, src: data?.avatar }}
      />
      <Outlet context={{ isAuthenticated } satisfies AuthContext} />
    </>
  )
}
