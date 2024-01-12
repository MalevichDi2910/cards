import { baseApi } from '@/common/services/api'
import { AuthResponseType } from '@/features/auth/api/authApi.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<AuthResponseType | null, void>({
        providesTags: ['Me'],
        query: () => {
          return {
            url: `v1/auth/me`,
          }
        },
      }),
    }
  },
})

export const { useMeQuery } = authApi
