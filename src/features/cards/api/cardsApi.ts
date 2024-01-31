import { baseApi } from '@/common/services/api'
import { Card, CardsParams, CardsResponseType } from '@/features/cards/api/cardsApi.types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, { body: FormData; id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ body, id }) => {
          return {
            body: body,
            method: 'POST',
            url: `/v1/decks/${id}/cards`,
          }
        },
      }),
      deleteCards: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ id }) => {
          return {
            method: 'DELETE',
            url: `/v1/cards/${id}`,
          }
        },
      }),
      getCards: builder.query<CardsResponseType, { id: string; params: CardsParams }>({
        providesTags: ['Cards'],
        query: ({ id, params }) => {
          return {
            params: params,
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      updateCard: builder.mutation<Card, { body: FormData; id: string }>({
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

export const {
  useCreateCardMutation,
  useDeleteCardsMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} = cardsApi
