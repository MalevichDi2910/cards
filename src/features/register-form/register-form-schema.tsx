import { z } from 'zod'

export type RegisterFormValues = z.infer<typeof registerFormSchema>

export const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
})
