import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createProduct } from './api'
import { useToast } from '@/hooks/use-toast'
import { AxiosError } from 'axios'
import { convertFormDataToOriginal } from '../utils/convertedFormData'

export const useCreateProduct = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['creating-products'],
    mutationFn: createProduct,
    async onMutate(newProduct) {
      await queryClient.cancelQueries({
        queryKey: ['products'],
      })
      const previousProducts = queryClient.getQueryData<FindAllProducts[]>([
        'products',
      ])

      const formartedNewProducto =
        convertFormDataToOriginal<InitialValuesProduct>(newProduct).products

      queryClient.setQueryData<FindAllProducts[]>(['products'], (oldData) => {
        const dataNewProducts: FindAllProducts[] = formartedNewProducto.map(
          (newProducts) => {
            const {
              brand,
              description,
              discount,
              gender,
              price,
              quantity,
              is_new,
              product,
              productInventory,
              size,
              productVariant,
            } = newProducts

            return {
              brand,
              category: {
                category: '',
                id: Date.now(),
              },
              description,
              discount,
              gender,
              price,
              quantity,
              is_new: Boolean(is_new),
              product,
              productInventory: {
                minStock: productInventory.minStock,
                stock: Boolean(productInventory.stock),
              },
              size,
              productVariant: productVariant.map((variant) => ({
                ...variant,
                id: Date.now(),
                key_url: '',
                color: variant.color,
                url: '',
              })),
              id: Date.now() + 1,
            }
          }
        )

        return [...(oldData || []), ...dataNewProducts]
      })
      return {
        previousProducts,
      }
    },
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['products'],
      })
    },
    async onSuccess(response) {
      await queryClient.invalidateQueries({
        queryKey: ['products'],
      })
      toast({
        title: 'Products creating',
        description: response.message,
        duration: 4000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError(error: AxiosError, _, context) {
      queryClient.setQueryData(['products'], context?.previousProducts)
      const rawMessage = error.response?.data as { message: string }

      toast({
        title: rawMessage.message,
        duration: 3000,
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },
  })
}
