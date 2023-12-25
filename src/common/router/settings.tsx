import { RouteObject } from 'react-router-dom'

export const publicRoutes: RouteObject[] = [
  {
    element: <div>SignInPage</div>,
    path: '/sign-in',
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <div>ProfilePage</div>,
    path: '/profile',
  },
]
