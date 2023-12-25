import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateRoutes } from '@/common/router/privateRoutes'
import { privateRoutes, publicRoutes } from '@/common/router/settings'

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
