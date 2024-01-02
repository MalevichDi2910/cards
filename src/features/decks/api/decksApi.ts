import { baseApi } from '@/common/services/api'
import { GetDecksResponseItems } from '@/common/services/api/flashcards.types'
import { Card } from '@/features/cards/api'
import { CreateRequestBodyType } from '@/features/decks/api/decksApi.types'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, { body: CreateRequestBodyType; id: string }>({
        query: ({ body, id }) => {
          return {
            body,
            method: `POST`,
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      getDeck: builder.query<GetDecksResponseItems, { id: string }>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
    }
  },
})

export const { useGetDeckQuery } = decksApi
