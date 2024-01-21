import { baseApi } from '@/common/services/api'
import { Card, CardsParams, CardsResponseType } from '@/features/cards/api/cardsApi.types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, { body: FormData; id: string }>({
        query: ({ body, id }) => {
          return {
            body,
            method: `POST`,
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      getCards: builder.query<CardsResponseType, { id: string; params: CardsParams }>({
        query: ({ id, params }) => {
          return {
            url: `v1/decks/${id}/cards`,
            ...(params ? { params: params } : null),
          }
        },
      }),
      updateCard: builder.query<Card, { body: FormData; id: string }>({
        query: ({ body, id }) => {
          return {
            body,
            method: 'PATCH',
            url: `v1/cards/${id}`,
          }
        },
      }),
    }
  },
})

export const { useCreateCardMutation, useGetCardsQuery, useUpdateCardQuery } = cardsApi
