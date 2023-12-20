import { z } from 'zod'
export type PersonalInfoFormValues = z.infer<typeof PersonalInfoSchema>

export const PersonalInfoSchema = z.object({
  file: z.any(),
  nickname: z.string().min(3, { message: 'Your nickname or more characters long' }).max(30),
})
