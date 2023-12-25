import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}
