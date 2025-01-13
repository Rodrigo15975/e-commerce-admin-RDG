import { z } from 'zod'

export const productVariantSchema = z.object({
  color: z.string().min(1, 'Color is required'),
  image: z.instanceof(File, { message: 'A valid file is required' }),
  // .refine((file) => file.size > 0, { message: 'File cannot be empty' }),
})

export type ImageVariant = {
  image: File | null
  color: string
}
