import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: 'https://api.flashcards.andrii.es',
      credentials: 'include',
      prepareHeaders: headers => {
        headers.append('x-auth-skip', 'true')
      },
    }),
    { maxRetries: 3 }
  ),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['Decks', 'Me'],
})
