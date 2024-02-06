import {
  CreateDeckArgs,
  GetDeckLearnResponse,
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
        providesTags: ['Decks'],
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
      getRandomCard: builder.query<GetDeckLearnResponse, { id: string }>({
        providesTags: ['Learn'],
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}/learn`,
          }
        },
      }),
      saveCardGrade: builder.mutation<
        void,
        { cardId: string | undefined; grade: number; id: string }
      >({
        invalidatesTags: ['Learn'],
        query: ({ cardId, grade, id }) => {
          return {
            body: { cardId, grade },
            method: `POST`,
            url: `v1/decks/${id}/learn`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckQuery,
  useGetDecksQuery,
  useGetRandomCardQuery,
  useSaveCardGradeMutation,
} = decksApi
