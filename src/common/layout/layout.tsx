import { Outlet, useOutletContext } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header } from '@/components/ui/header'
import { Loader } from '@/components/ui/loader'
import { useMeQuery } from '@/features/auth/api'

type AuthContext = {
  isAuthenticated: boolean
}

export function useAuthContext() {
  return useOutletContext<AuthContext>()
}

export const Layout = () => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <ToastContainer
        autoClose={4000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={'top-center'}
        rtl={false}
        theme={'colored'}
      />
      <Header
        isLoggedIn={isAuthenticated}
        user={{ email: data?.email, name: data?.name, src: data?.avatar }}
      />
      <Outlet />
    </>
  )
}
