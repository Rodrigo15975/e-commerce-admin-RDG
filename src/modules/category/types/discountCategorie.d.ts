/* eslint-disable @typescript-eslint/no-empty-interface */

type CreateDiscountCategory = {
  discount: number | string
  categoryId: string | number
  end_date: string
  start_date: string
  is_active: boolean
  id?: number
}

type UpdateDiscountCategory = CreateDiscountCategory
