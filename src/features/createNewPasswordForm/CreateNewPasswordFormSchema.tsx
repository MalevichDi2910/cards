import { z } from 'zod'

export type CreateNewPasswordFormValues = z.infer<typeof CreateNewPasswordFormSchema>

export const CreateNewPasswordFormSchema = z.object({
  password: z.string().min(3),
})
