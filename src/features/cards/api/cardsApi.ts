import { baseApi } from '@/common/services/api'
import { CardsParams, CardsResponseType } from '@/features/cards/api/cardsApi.types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCards: builder.query<CardsResponseType, { id: string; params: CardsParams }>({
        query: ({ id, params }) => {
          return {
            url: `v1/decks/${id}/cards`,
            ...(params ? { params: params } : null),
          }
        },
      }),
    }
  },
})

export const { useGetCardsQuery } = cardsApi
