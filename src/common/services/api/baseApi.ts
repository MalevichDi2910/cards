import { baseQueryWithReauth } from '@/common/services/api/baseQueryWithReauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['Decks', 'Me', 'Cards', 'Learn'],
})
