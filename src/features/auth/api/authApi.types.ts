export type AuthResponseType = {
  avatar: string
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
  rememberMe?: boolean
}

export type SignUpParamsType = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type ResetPasswordParamsType = {
  password: string
  token: string
}

export type RecoverPasswordParamsType = {
  email: string
  html: string
}
