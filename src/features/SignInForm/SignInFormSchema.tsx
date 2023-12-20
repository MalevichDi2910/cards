import { z } from 'zod'

export type SignInFormValues = z.infer<typeof SignInFormSchema>

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional().default(false),
})
