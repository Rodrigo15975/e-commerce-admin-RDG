import { z } from "zod"
import { isBefore, addMonths, isAfter } from "date-fns"
export const formSchemaDiscountCategorie = z.object({
  discount: z.string().optional(),
  end_date: z
    .string()
    .min(1, { message: "Required" })
    .refine(
      (value) => {
        const endDate = new Date(value)
        const now = new Date()
        const oneMonthFromNow = addMonths(now, 1)

        return isAfter(endDate, now) && isBefore(endDate, oneMonthFromNow)
      },
      {
        message:
          "End date must be between the current date and one month from now",
      }
    ),
  start_date: z.string().nullable(),
  is_active: z.boolean().nullable(),
  categoryId: z.string().min(1, { message: "Required" }),
})

type KeyInputDiscountCategorie = keyof z.infer<
  typeof formSchemaDiscountCategorie
>

export type FormInputDiscountCategorie = {
  name: KeyInputDiscountCategorie
  text: string
  type?: string
}

export const formInputCreateDiscountCategorie: FormInputDiscountCategorie[] = [
  {
    name: "categoryId",
    text: "Category",
  },
  {
    name: "discount",
    text: "Discount",
  },
  {
    name: "end_date",
    text: "End date",
    type: "date",
  },
]
