import { z } from 'zod'

export type DeckFormSchema = z.infer<typeof deckFormSchema>

export const deckFormSchema = z.object({
  isPrivate: z.boolean().optional().default(false),
  nameDeck: z
    .string()
    .refine(
      value => value.trim().length > 2,
      'The name of deck must be longer than or equal to 3 characters.'
    ),
})
