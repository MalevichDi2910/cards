import { z } from 'zod'

export type DeckFormSchema = z.infer<typeof deckFormSchema>

export const deckFormSchema = z.object({
  namePack: z.string().min(1),
  privatePack: z.boolean().optional().default(false),
})
