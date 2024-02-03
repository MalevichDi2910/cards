import { z } from 'zod'

export type CardFormValues = z.infer<typeof cardFormSchema>

export const cardFormSchema = z.object({
  answer: z
    .string()
    .refine(
      value => value.trim().length > 2,
      'The question must be longer than or equal to 3 characters.'
    ),
  question: z
    .string()
    .refine(
      value => value.trim().length > 2,
      'The question must be longer than or equal to 3 characters.'
    ),
})
