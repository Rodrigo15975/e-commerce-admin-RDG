import { useToast } from '@/hooks/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import {
  createArchiveProductVariant,
  createSize,
  deleteArhive,
  deleteProduct,
  deleteSize,
  updateProduct,
} from './api'
export const useDeleteProduct = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['delete-product'],
    mutationFn: deleteProduct,

    async onMutate(id) {
      // await queryClient.cancelQueries({
      //   queryKey: ['products'],
      // })
      const previousProducts = queryClient.getQueryData<FindAllProducts[]>([
        'products',
      ])

      queryClient.setQueryData<FindAllProducts[]>(['products'], (oldData) =>
        oldData ? oldData.filter((product) => product.id !== id) : []
      )
      queryClient.setQueryData<FindAllCoupons[]>(['coupons'], (oldData) =>
        oldData ? oldData.filter((coupon) => coupon.products.id !== id) : []
      )

      return {
        previousProducts,
      }
    },
    async onSettled() {
      // await queryClient.invalidateQueries({
      //   queryKey: ['products'],
      // })
    },

    onSuccess: async (data) => {
      const { message } = data

      await queryClient.refetchQueries({
        queryKey: ['products'],
      })
      toast({
        title: 'Product deleted',
        description: message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError, _, context) {
      queryClient.setQueryData(['products'], context?.previousProducts)
      const response = error.response?.data as { message: string }
      toast({
        title: response.message,
        description: 'Try again',
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
export const useCreateArchiveProductVariant = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['create-archive-productVariant'],
    mutationFn: createArchiveProductVariant,
    onSuccess: async (data) => {
      await queryClient.refetchQueries({
        queryKey: ['products'],
      })
      toast({
        title: 'Created archive',
        description: data.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const response = error.response?.data as { message: string }
      toast({
        title: response.message,
        description: 'Try again',
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
export const useCreateSize = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['create-product-size'],
    mutationFn: createSize,
    onSuccess: async (data) => {
      await queryClient.refetchQueries({
        queryKey: ['products'],
      })
      toast({
        title: 'Created size',
        description: data.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const response = error.response?.data as { message: string }
      toast({
        title: response.message,
        description: 'Try again',
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
export const useDeleteArchive = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['delete-product-archive'],
    mutationFn: deleteArhive,

    onSuccess: async (data) => {
      await queryClient.refetchQueries({
        queryKey: ['products'],
      })
      toast({
        title: 'Archive deleted',
        description: data.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const response = error.response?.data as { message: string }
      toast({
        title: response.message,
        description: 'Try again',
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
export const useDeleteSize = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['delete-product-size'],
    mutationFn: deleteSize,

    onSuccess: async (data) => {
      await queryClient.refetchQueries({
        queryKey: ['products'],
      })
      toast({
        title: 'Size deleted',
        description: data.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const response = error.response?.data as { message: string }
      toast({
        title: response.message,
        description: 'Try again',
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}

export const useUpdateProduct = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['update-product'],
    mutationFn: updateProduct,
    onSuccess: async (data) => {
      await queryClient.refetchQueries({
        queryKey: ['products'],
      })
      toast({
        title: 'Product updated',
        description: data.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError) {
      const response = error.response?.data as { message: string }
      toast({
        title: response.message,
        description: 'Try again',
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
