import { RouteObject } from 'react-router-dom'

import { SignInForm } from '@/features/SignInForm'
import { PersonalInfo } from '@/features/personal-information'
import { Decks } from '@/pages/decks'

export const publicRoutes: RouteObject[] = [
  {
    element: <SignInForm />,
    path: '/sign-in',
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <PersonalInfo user={{ email: 'maldi-999@mail.ru', name: 'Diana', src: '' }} />,
    path: '/profile',
  },
  {
    element: <Decks />,
    path: '/decks',
  },
]
