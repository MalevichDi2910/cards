import { RouteObject } from 'react-router-dom'

import { DeckPage } from '@/pages/deckPage/deckPage'
import { SingleCard } from '@/pages/singlePack/singleCard'

export const publicRoutes: RouteObject[] = [
  {
    element: <div>SignInPage</div>,
    path: '/sign-in',
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
    element: <div>ProfilePage</div>,
    path: '/profile',
  },
]
