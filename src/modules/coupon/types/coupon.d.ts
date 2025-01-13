interface Coupon {
  id?: number
  code: string
  discount: number
  isGlobal: boolean
  isNew: boolean
  espiryDate: string
  createdAt?: string
  updatedAt?: string
}

interface FindAllCoupons extends Coupon {
  products: {
    id: number
    product: string
  }
}

interface CreateCoupon extends Coupon {
  product: number | undefined | string | null
}

interface UpdateCoupon extends CreateCoupon {}
