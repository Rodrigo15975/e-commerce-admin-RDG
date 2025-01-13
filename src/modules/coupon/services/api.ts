import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'

export const getAllCoupons = async () =>
  await useMethods.GET<FindAllCoupons[]>(`${PathServices.COUPON}`)

export const createCoupon = async (data: CreateCoupon) =>
  await useMethods.POST<HttpResponse, CreateCoupon>(
    `${PathServices.COUPON}`,
    data
  )
export const deleteCoupon = async (id: number | undefined) =>
  await useMethods.DELETE<HttpResponse>(`${PathServices.COUPON}/${id}`)

export const updateCoupon = async (data: UpdateCoupon) =>
  await useMethods.PATCH<HttpResponse, UpdateCoupon>(
    `${PathServices.COUPON}`,
    data
  )
