import { Navigate, RouteObject } from 'react-router-dom'

import { CreateNewPasswordForm } from '@/features/createNewPasswordForm'
import { ForgotPasswordForm } from '@/features/forgot-password'
import { PersonalInfo } from '@/features/personal-information'
import { RegisterForm } from '@/features/register-form'
import { SignInForm } from '@/features/signInForm'
import { DeckPage } from '@/pages/deckPage/deckPage'
import { Decks } from '@/pages/decks'

import { DeckPage } from '@/pages/deckPage/deckPage'
import { SingleCard } from '@/pages/singlePack/singleCard'

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
  {
    element: <SingleCard />,
    path: '/test',
  },
  {
    element: <DeckPage />,
    path: '/deck',
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: (
      <PersonalInfo
        user={{
          email: 'example@google.com',
          name: 'kukus',
          src: 'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/aeaf3a9f-fd81-4f03-9910-654915efb4b5-Ellipse%2045.png',
        }}
      />
    ),
    path: '/v1/profile',
  },
  { element: <DeckPage />, path: `v1/decks/:id/cards` },
  { element: <Navigate to={'/v2/decks'} />, path: '/' },
  { element: <Decks />, path: 'v2/decks' },
  { element: <h1>Learn</h1>, path: 'v1/decks/:id/learn' },
]
