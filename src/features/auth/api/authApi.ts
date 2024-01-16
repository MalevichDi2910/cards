import { baseApi } from '@/common/services/api'

import { AuthResponseType, LoginRequestType, LoginResponseType } from './authApi.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponseType, LoginRequestType>({
        query: body => {
          return {
            body,
            method: 'POST',
            url: `v1/auth/login`,
          }
        },
      }),
      me: builder.query<AuthResponseType | null, void>({
        query: () => {
          return {
            url: `v1/auth/me`,
          }
        },
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery } = authApi
