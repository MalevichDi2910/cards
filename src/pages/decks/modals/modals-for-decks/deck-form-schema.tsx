import { z } from 'zod'

export type DeckFormSchema = z.infer<typeof deckFormSchema>

export const deckFormSchema = z.object({
  nameDeck: z.string().min(1),
  privateDeck: z.boolean().optional().default(false),
})
