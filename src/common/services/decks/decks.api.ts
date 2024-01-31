import {
  CreateDeckArgs,
  GetDecksArgs,
  GetDecksResponse,
  GetDecksResponseItems,
} from '@/common/services/api'
import { baseApi } from '@/common/services/api/baseApi'

const decksApi = baseApi.injectEndpoints({
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
      deleteDeck: builder.mutation<any, string>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          params: { id },
          url: `v1/decks/${id}`,
        }),
      }),
      getDeck: builder.query<GetDecksResponseItems, { id: string }>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? {},
          url: `v2/decks`,
        }),
      }),
    }
  },
})

export const { useCreateDeckMutation, useDeleteDeckMutation, useGetDeckQuery, useGetDecksQuery } =
  decksApi
