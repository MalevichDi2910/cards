import { Navigate, RouteObject } from 'react-router-dom'

import { CheckEmail } from '@/features/check-email'
import { RegisterForm } from '@/features/register-form'
import { CreateNewPasswordPage } from '@/pages/createNewPasswordPage'
import { DeckPage } from '@/pages/deckPage/deckPage'
import { Decks } from '@/pages/decks'
import { ForgotPasswordPage } from '@/pages/forgotPasswordPage'
import { LearnCard } from '@/pages/learnCard/learnCard'
import { Profile } from '@/pages/profile'
import { SignInPage } from '@/pages/signInPage/signInPage'

export const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <SignInPage />,
        path: '/sign-in',
      },
      {
        element: <RegisterForm />,
        path: '/sign-up',
      },
      {
        element: <h1>not-found</h1>,
        path: '/not-found',
      },
      { element: <CheckEmail />, path: '/check-email/:email' },
      { element: <ForgotPasswordPage />, path: '/forgot-password' },
      { element: <CreateNewPasswordPage />, path: `/create-new-password/:token` },
    ],
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <Profile />,
    path: '/profile',
  },
  { element: <DeckPage />, path: `/decks/:id/cards` },
  { element: <Navigate to={'/decks'} />, path: '/' },
  { element: <Decks />, path: '/decks' },
  { element: <LearnCard />, path: '/decks/:id/learn' },
]
