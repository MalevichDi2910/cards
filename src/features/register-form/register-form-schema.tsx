import { z } from 'zod'

export type RegisterFormValues = z.infer<typeof registerFormSchema>

export const registerFormSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "passwords don't match",
    path: ['confirmPassword'],
  })
