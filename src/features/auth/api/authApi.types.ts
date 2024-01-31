export type AuthResponseType = {
  avatar?: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginResponseType = { accessToken: string }

export type LoginRequestType = {
  email: string
  password: string
  rememberMe: boolean
}
