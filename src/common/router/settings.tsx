import { RouteObject } from 'react-router-dom'

import { SignInForm } from '@/features/SignInForm'
import { Decks } from '@/pages/decks'

export const publicRoutes: RouteObject[] = [
  {
    element: <SignInForm />,
    path: '/sign-in',
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/decks',
  },
]
