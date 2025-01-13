import { z } from 'zod'

export const formSchemaCoupon = z
  .object({
    code: z
      .string()
      .min(1, 'Code is required')
      .max(10, 'Code must be less than 10 characters'),
    discount: z.number().optional(),
    isNew: z.boolean().optional(),
    isGlobal: z.boolean({
      required_error: 'Is this coupon global? is required.',
      message: 'Is this coupon global? is required.',
    }),
    product: z.string().optional(),
    espiryDate: z
      .string()
      .min(1, { message: 'Expiry date is required.' })
      .refine(
        (date) => {
          const inputDate = new Date(date)
          const today = new Date()
          today.setHours(0, 0, 0, 0)

          const maxDate = new Date()
          maxDate.setHours(0, 0, 0, 0)
          maxDate.setMonth(maxDate.getMonth() + 1)

          return inputDate > today && inputDate <= maxDate
        },
        {
          message:
            'Expiry date must be within the next month and in the future.',
        }
      ),
  })
  .refine(
    (data) => {
      return !data.isGlobal && !data.product ? false : true
    },

    {
      message: 'Product  is required when coupon is not global.',
      path: ['product'],
    }
  )

type KeyInputCoupon = keyof z.infer<typeof formSchemaCoupon>

export type FormInputCoupon = {
  name: KeyInputCoupon
  text: string
  type?: string
  disabled?: boolean
  componenType?: string
  showButton?: boolean
}
