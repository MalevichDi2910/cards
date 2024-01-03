import { baseApi } from '@/common/services/api/baseApi'
import { AuthMeResponseType } from '@/common/services/auth'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getAuthMe: builder.query<AuthMeResponseType | null, void>({
        providesTags: ['Auth'],
        query: () => {
          return {
            url: `v1/auth/me`,
          }
        },
      }),
    }
  },
})

export const { useGetAuthMeQuery } = authApi
