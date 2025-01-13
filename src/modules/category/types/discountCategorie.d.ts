interface CreateDiscountCategory {
  discount: number | string
  categoryId: string | number
  end_date: string
  start_date: string
  is_active: boolean
  id?: number
}

interface UpdateDiscountCategory extends CreateDiscountCategory {}
