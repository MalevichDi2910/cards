import {
  DeckResponse,
  GetDeckLearnResponse,
  GetDecksArgs,
  GetDecksResponse,
  GetDecksResponseItems,
} from '@/common/services/api'
import { baseApi } from '@/common/services/api/baseApi'
import { RootState } from '@/common/services/store'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<GetDecksResponseItems, { body: FormData }>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async (_, { dispatch, getState, queryFulfilled }) => {
          const state = getState() as RootState
          const currentPage = state.decks.currentPage
          const name = state.decks.search
          const minCards = state.decks.range[0]
          const maxCards = state.decks.range[1]

          const res = await queryFulfilled

          dispatch(
            decksApi.util.updateQueryData(
              'getDecks',
              { currentPage, maxCardsCount: maxCards, minCardsCount: minCards, name },
              draft => {
                draft.items.unshift(res.data)
              }
            )
          )
        },
        query: ({ body }) => {
          return {
            body,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      deleteDeck: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
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
      updateDeck: builder.mutation<DeckResponse, { body: FormData; id: string }>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async ({ id, ...body }, { dispatch, getState, queryFulfilled }) => {
          const state = getState() as RootState
          const currentPage = state.decks.currentPage
          const name = state.decks.search
          const minCards = state.decks.range[0]
          const maxCards = state.decks.range[1]

          dispatch(
            decksApi.util.updateQueryData(
              'getDecks',
              { currentPage, maxCardsCount: maxCards, minCardsCount: minCards, name },
              draft => {
                const deck = draft.items.find(deck => deck.id === id)

                if (deck) {
                  Object.assign(deck, {
                    ...deck,
                    ...body,
                  })
                }
              }
            )
          )
          await queryFulfilled
        },
        query: ({ body, id }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
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
  useUpdateDeckMutation,
} = decksApi
