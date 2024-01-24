import { RouteObject } from 'react-router-dom'

import { PersonalInfo } from '@/features/personal-information'
import { RegisterForm } from '@/features/register-form'
import { SignInForm } from '@/features/signInForm'
import { DeckPage } from '@/pages/deckPage/deckPage'

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
    ],
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
  {
    element: <SignInForm />,
    path: '/v1/',
    element: <Decks />,
    path: '/decks',
  },
  { element: <DeckPage />, path: `v1/decks/:id/cards` },
]
