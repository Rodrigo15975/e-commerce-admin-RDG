import { useToast } from '@/hooks/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { createCoupon, deleteCoupon, updateCoupon } from './api'
export const useCreateCoupon = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['create-coupon'],
    mutationFn: createCoupon,

    async onMutate(newCoupon) {
      await queryClient.cancelQueries({
        queryKey: ['coupons'],
      })
      const previousCoupons = queryClient.getQueryData<CreateCoupon[]>([
        'coupons',
      ])

      queryClient.setQueryData<CreateCoupon[]>(['coupons'], (oldCoupons) => [
        ...(oldCoupons || []),
        {
          ...newCoupon,
          id: Date.now(),
        },
      ])

      return { previousCoupons }
    },
    onSuccess: async (response) => {
      const { message } = response
      await queryClient.invalidateQueries({
        queryKey: ['coupons'],
      })
      toast({
        title: 'Cuopon created',
        description: message,
        duration: 3000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['coupons'],
      })
    },

    async onError(error: AxiosError, _variables, context) {
      await queryClient.setQueryData(['coupons'], context?.previousCoupons)
      const rawMessage = error.response?.data as { message: string }

      toast({
        title: rawMessage.message,
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}

export const useUpdateCoupon = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['update-coupon'],
    mutationFn: updateCoupon,
    async onMutate(updateCoupon) {
      const { id } = updateCoupon
      await queryClient.cancelQueries({
        queryKey: ['coupons'],
      })
      const previousCouponUpdate = queryClient.getQueryData<UpdateCoupon[]>([
        'coupons',
      ])

      queryClient.setQueryData<UpdateCoupon[]>(['coupons'], (oldCoupons) =>
        oldCoupons?.map((coupon) =>
          coupon.id === id ? { ...coupon, ...updateCoupon } : coupon
        )
      )
      return {
        previousCouponUpdate,
      }
    },
    async onSuccess(response) {
      await queryClient.invalidateQueries({
        queryKey: ['coupons'],
      })

      toast({
        title: 'Cuopon updated',
        description: response.message,
        duration: 3000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['coupons'],
      })
    },
    async onError(error: AxiosError, _, context) {
      await queryClient.setQueryData(['coupons'], context?.previousCouponUpdate)
      const rawMessage = error.response?.data as { message: string }

      toast({
        title: rawMessage.message,
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}

export const useDeleteCoupon = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['delete-coupon'],
    mutationFn: deleteCoupon,
    async onMutate(id) {
      await queryClient.cancelQueries({
        queryKey: ['coupons'],
      })
      const previousCouponsDelete = queryClient.getQueryData<FindAllCoupons[]>([
        'coupons',
      ])

      queryClient.setQueryData<FindAllCoupons[]>(['coupons'], (oldCoupons) =>
        oldCoupons?.filter((coupon) => coupon.id !== id)
      )

      return {
        previousCouponsDelete,
      }
    },
    async onSuccess(response) {
      await queryClient.invalidateQueries({
        queryKey: ['coupons'],
      })
      toast({
        title: 'Cuopon deleted',
        description: response.message,
        duration: 3000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['coupons'],
      })
    },

    async onError(error: AxiosError, _, context) {
      await queryClient.setQueryData(
        ['coupons'],
        context?.previousCouponsDelete
      )
      const rawMessage = error.response?.data as { message: string }

      toast({
        title: rawMessage.message,
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
