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
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => {
          return {
            method: 'POST',
            url: `v1/auth/logout`,
          }
        },
      }),
      me: builder.query<AuthResponseType | null, void>({
        providesTags: ['Me'],
        query: () => {
          return {
            url: `v1/auth/me`,
          }
        },
      }),
      updateProfile: builder.mutation<AuthResponseType, FormData>({
        query: body => {
          return {
            body,
            method: 'PATCH',
            url: `v1/auth/me`,
          }
        },
      }),
    }
  },
})

export const { useLoginMutation, useLogoutMutation, useMeQuery, useUpdateProfileMutation } = authApi
