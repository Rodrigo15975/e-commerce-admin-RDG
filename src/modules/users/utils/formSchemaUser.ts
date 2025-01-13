import { z } from 'zod'

export const formSchemaUser = z.object({
  name: z.string().min(1, { message: 'Required' }),
  lastname: z.string().min(1, { message: 'Required' }),
  dni: z
    .string()
    .min(8, { message: 'Required' })
    .max(8, { message: '8 dígitos' }),
  password: z.string().min(1, { message: 'Required' }),
  role: z.string().min(1, { message: 'Required' }),
  phone: z
    .string()
    .min(9, { message: 'Required' })
    .max(9, { message: '9 dígitos' }),
  user_active: z.boolean().nullable().optional(),
  // Otras propiedades
})

export const formSchemaUserUpdate = z.object({
  name: z.string().min(1, { message: 'Required' }),
  lastname: z.string().min(1, { message: 'Required' }),
  role: z.string().min(1, { message: 'Required' }),
  dni: z
    .string()
    .min(8, { message: 'Required' })
    .max(8, { message: '8 dígitos' }),
  phone: z
    .string()
    .min(9, { message: 'Required' })
    .max(9, { message: '9 dígitos' }),
})
