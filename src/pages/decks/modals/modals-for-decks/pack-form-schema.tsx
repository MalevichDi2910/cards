import { z } from 'zod'

export type PackFormValues = z.infer<typeof packFormSchema>

export const packFormSchema = z.object({
  namePack: z.string().min(1),
  privatePack: z.boolean().optional().default(false),
})
