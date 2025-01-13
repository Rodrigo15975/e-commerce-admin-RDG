/* eslint-disable @typescript-eslint/no-empty-interface */

type Coupon = {
  id?: number
  code: string
  discount: number
  isGlobal: boolean
  isNew: boolean
  espiryDate: string
  createdAt?: string
  updatedAt?: string
  _?: never
}

type FindAllCoupons = Coupon & {
  products: {
    id: number
    product: string
  }
}

type CreateCoupon = Coupon & {
  product: number | undefined | string | null
}

type UpdateCoupon = CreateCoupon
