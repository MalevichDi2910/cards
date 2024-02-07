import { Navigate, RouteObject } from 'react-router-dom'

import { CreateNewPasswordForm } from '@/features/createNewPasswordForm'
import { ForgotPasswordForm } from '@/features/forgot-password'
import { RegisterForm } from '@/features/register-form'
import { SignInForm } from '@/features/signInForm'
import { DeckPage } from '@/pages/deckPage/deckPage'
import { Decks } from '@/pages/decks'
import { LearnCard } from '@/pages/learnCard/learnCard'
import { Profile } from '@/pages/profile'

export const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <SignInForm />,
        path: '/v1/sign-in',
      },
      {
        element: <RegisterForm />,
        path: '/v1/sign-up',
      },
      {
        element: <h1>not-found</h1>,
        path: '/v1/not-found',
      },
      { element: <ForgotPasswordForm />, path: '/v1/forgot-password' },
      { element: <CreateNewPasswordForm />, path: `/v1/create-new-password/:token` },
    ],
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <Profile />,
    path: '/v1/profile',
  },
  { element: <DeckPage />, path: `v1/decks/:id/cards` },
  { element: <Navigate to={'/v2/decks'} />, path: '/' },
  { element: <Decks />, path: 'v2/decks' },
  { element: <LearnCard />, path: 'v1/decks/:id/learn' },
]
