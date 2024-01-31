import { z } from 'zod'

export type addCardFormValues = z.infer<typeof addCardFormSchema>

export const addCardFormSchema = z.object({
  answer: z.string().refine(value => value.trim().length > 0),
  question: z.string().refine(value => value.trim().length > 0),
})
