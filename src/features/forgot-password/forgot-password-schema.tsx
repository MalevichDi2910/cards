import { z } from 'zod'

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
})
