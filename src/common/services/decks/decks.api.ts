import {
  ArgUpdateDeckType,
  CreateDeckArgs,
  GetDeckLearnResponse,
  GetDecksArgs,
  GetDecksResponse,
  GetDecksResponseItems,
  UpdateDeckResponse,
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
      deleteDeck: builder.mutation<void, string>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
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
      updateDeck: builder.mutation<UpdateDeckResponse, { body: ArgUpdateDeckType; id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ body, id }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
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
  useUpdateDeckMutation,
  useGetRandomCardQuery,
  useSaveCardGradeMutation,
} = decksApi
