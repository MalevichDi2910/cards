import { CreateDeckArgs, GetDecksArgs, GetDecksResponse } from '@/common/services/api'
import { baseApi } from '@/common/services/api/baseApi'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? {},
          url: `v1/decks`,
        }),
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDecksQuery } = decksService
