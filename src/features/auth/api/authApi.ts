import { baseApi } from '@/common/services/api'

import {
  AuthResponseType,
  LoginRequestType,
  LoginResponseType,
  ResetPasswordParamsType,
  SignUpParamsType,
} from './authApi.types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponseType, LoginRequestType>({
        invalidatesTags: ['Me'],
        query: body => {
          return {
            body,
            method: 'POST',
            url: 'v1/auth/login',
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
      resetPassword: builder.mutation<void, ResetPasswordParamsType>({
        query: ({ password, token }) => ({
          body: { password },
          method: 'POST',
          url: `v1/auth/reset-password/${token}`,
        }),
      }),
      signUp: builder.mutation<AuthResponseType, SignUpParamsType>({
        invalidatesTags: ['Me'],
        query: params => ({
          body: params,
          method: 'POST',
          url: 'v1/auth/sign-up',
        }),
      }),
      updateProfile: builder.mutation<AuthResponseType, FormData>({
        invalidatesTags: ['Me'],
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

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateProfileMutation,
} = authApi
