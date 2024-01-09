import { baseApi } from '@/common/services/api/baseApi'
import { User } from '@/common/services/auth'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<User | null, void>({
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
