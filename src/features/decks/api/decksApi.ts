import { baseApi } from '@/common/services/api'
import { GetDecksResponseItems } from '@/common/services/api/flashcards.types'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
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
