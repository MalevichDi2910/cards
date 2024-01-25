import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/common/layout/layout'
import { PrivateRoutes } from '@/common/router/privateRoutes'
import { privateRoutes, publicRoutes } from '@/common/router/settings'

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    errorElement: <Navigate to={'/v1/not-found'} />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
