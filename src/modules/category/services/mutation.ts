import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  createCategorie,
  createCategorieDiscount,
  deleteCategorie,
  updateCategorie,
  updateCategorieDiscount,
} from './api'
import { useToast } from '@/hooks/use-toast'
import { AxiosError } from 'axios'

export const useCreateCategorie = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['createCategorie'],
    mutationFn: createCategorie,

    onError(error: AxiosError) {
      console.error(error)
      if (
        error.response?.data &&
        typeof error.response.data === 'object' &&
        'message' in error.response.data
      ) {
        toast({
          title: `${error.response?.data.message}`,
          'aria-activedescendant': 'Error for create categorie',
          className: 'bg-gradient-to-t from-orange-100 to-orange-100',
        })
        return
      }
      toast({
        title: 'Error for create categorie',
        'aria-activedescendant': 'Error for create categorie',
        className: 'bg-gradient-to-t from-orange-100 to-orange-100',
      })
    },

    async onSuccess(response) {
      await queryClient.refetchQueries({
        queryKey: ['categories'],
      })
      toast({
        title: `${response.message}`,
        description: `Category has been created.`,
        variant: 'default',
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
  })
}
export const useDeleteCategorie = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    // retry: 3,
    // retryDelay: 2000,
    mutationKey: ['deleteCategorie'],
    mutationFn: deleteCategorie,
    async onMutate(id) {
      await queryClient.cancelQueries({
        queryKey: ['categories'],
      })
      const previesCategories = queryClient.getQueryData<Categories[]>([
        'categories',
      ])

      queryClient.setQueryData<Categories[]>(['categories'], (oldData) =>
        oldData?.filter((category) => category.id !== id)
      )

      return {
        previesCategories,
      }
    },
    onError(error, _, context) {
      queryClient.setQueryData<Categories[]>(
        ['categories'],
        context?.previesCategories
      )
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          'aria-activedescendant': error.message,
          className: 'bg-gradient-to-t from-orange-100 to-orange-100',
        })
      }
    },

    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
    },
    async onSuccess(response) {
      await queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
      toast({
        title: `${response.message}`,
        description: `Category has been created.`,
        variant: 'default',
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
  })
}
export const useUpdateCategorie = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    // retry: 3,
    // retryDelay: 2000,
    mutationKey: ['updateCategorie'],
    mutationFn: updateCategorie,
    async onMutate(variables) {
      await queryClient.cancelQueries({
        queryKey: ['categories'],
      })

      const previesCategories = queryClient.getQueryData<Categories[]>([
        'categories',
      ])
      queryClient.setQueryData<Categories[]>(['categories'], (oldData) =>
        oldData?.map((category) =>
          category.id === variables.id
            ? { ...category, ...variables }
            : category
        )
      )
      return {
        previesCategories,
      }
    },
    onError(error, _, context) {
      queryClient.setQueryData<Categories[]>(
        ['categories'],
        context?.previesCategories
      )
      if (error instanceof AxiosError)
        toast({
          title: `${error.response?.data.message}`,
          'aria-activedescendant': error.message,
          className: 'bg-gradient-to-t from-orange-100 to-orange-100',
        })
    },
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
      toast({
        title: `${data.message}`,
        description: `Category has been created.`,
        variant: 'default',
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
  })
}

export const useCreateCategorieDiscount = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['create-categorie-discount'],
    mutationFn: createCategorieDiscount,

    async onMutate(categorieWithDiscount) {
      await queryClient.cancelQueries({
        queryKey: ['categories'],
      })
      const previesCategories = queryClient.getQueryData<Categories[]>([
        'categories',
      ])
      queryClient.setQueryData<Categories[]>(['categories'], (oldData) => {
        const newCategories = oldData?.map((category) =>
          category.id === categorieWithDiscount.id
            ? { ...category, ...categorieWithDiscount }
            : category
        )
        return newCategories
      })
      return {
        previesCategories,
      }
    },
    onError(error, _, context) {
      queryClient.setQueryData<Categories[]>(
        ['categories'],
        context?.previesCategories
      )
      if (error instanceof AxiosError)
        toast({
          title: `${error.response?.data.message}`,
          'aria-activedescendant': error.message,
          className: 'bg-gradient-to-t from-orange-100 to-orange-100',
        })
    },
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
      toast({
        title: `${data.message}`,
        description: `Category discount has been created.`,
        variant: 'default',
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
  })
}

export const useUpdateCategorieDiscount = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['update-categorie-discount'],
    mutationFn: updateCategorieDiscount,
    onMutate(updateCategorieWithDiscount) {
      const previesCategories = queryClient.getQueryData<Categories[]>([
        'categories',
      ])
      queryClient.setQueryData<Categories[]>(['categories'], (oldData) =>
        oldData?.map((category) =>
          category.id === updateCategorieWithDiscount.id
            ? { ...category, ...updateCategorieWithDiscount }
            : category
        )
      )
      return {
        previesCategories,
      }
    },
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
    },
    onError(error, _, context) {
      queryClient.setQueryData<Categories[]>(
        ['categories'],
        context?.previesCategories
      )
      if (error instanceof AxiosError)
        toast({
          title: `${error.response?.data.message}`,
          'aria-activedescendant': error.message,
          className: 'bg-gradient-to-t from-orange-100 to-orange-100',
        })
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
      toast({
        title: `${data.message}`,
        description: `Category discount has been updated.`,
        variant: 'default',
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
  })
}
