import { z } from 'zod'

export type DeckFormValues = z.infer<typeof deckFormSchema>

export const deckFormSchema = z.object({
  isPrivate: z.boolean().optional().default(false),
  name: z
    .string()
    .refine(
      value => value.trim().length > 2,
      'The name of deck must be longer than or equal to 3 characters.'
    ),
})
