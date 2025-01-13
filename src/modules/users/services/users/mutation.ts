import { useToast } from '@/hooks/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser, deleteUser, updateUpdate } from './api'
import { AxiosError } from 'axios'

export const useCreateUser = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createUser,
    async onMutate(newUser) {
      await queryClient.cancelQueries({
        queryKey: ['users'],
      })

      const previousUsers = queryClient.getQueryData<User[]>(['users'])
      queryClient.setQueryData<User[]>(['users'], (oldUsers) => [
        ...(oldUsers || []),
        {
          ...newUser,
          id: Date.now(),
          role: {
            role: '',
            id: Date.now() + 1,
          },
          avatar: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          roleId: Date.now() + 2,
          auditoria: {
            name: '',
            dni: '',
            lastname: '',
            avatar: null,
          },
        },
      ])
      return {
        previousUsers,
      }
    },

    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      })
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      })
      toast({
        title: `${data.message}`,
        description: `User has been created.`,
        variant: 'default',
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },

    async onError(error, _, context) {
      queryClient.setQueryData(['users'], context?.previousUsers)
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          'aria-activedescendant': error.message,
          className: 'bg-gradient-to-t from-orange-100 to-orange-100',
        })
      }
    },
  })
}
export const useUpdateUser = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateUpdate,

    async onMutate(updateUser) {
      await queryClient.cancelQueries({
        queryKey: ['users'],
      })

      const previousUsers = queryClient.getQueryData<UpdateUser[]>(['users'])
      queryClient.setQueryData<UpdateUser[]>(['users'], (oldUsers) =>
        oldUsers?.map((user) =>
          user.id === updateUser.id ? { ...user, ...updateUser } : user
        )
      )

      return {
        previousUsers,
      }
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      })
      toast({
        title: `${data.message}`,
        description: `User has been created.`,
        variant: 'default',
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      })
    },

    async onError(error, _, context) {
      queryClient.setQueryData(['users'], context?.previousUsers)
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          'aria-activedescendant': error.message,
          className: 'bg-gradient-to-t from-orange-100 to-orange-100',
        })
      }
    },
  })
}
export const useDeleteUser = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteUser,
    async onMutate(id) {
      await queryClient.cancelQueries({
        queryKey: ['users'],
      })
      const previousUsers = queryClient.getQueryData(['users'])

      queryClient.setQueryData<User[]>(['users'], (oldUser) =>
        oldUser?.filter((user) => user.id !== id)
      )

      return {
        previousUsers,
      }
    },

    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      })
    },
    async onSuccess(data) {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      })
      toast({
        title: `${data.message}`,
        description: `User has been created.`,
        variant: 'default',
        duration: 2000,
        translate: 'yes',
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },

    async onError(error, _, context) {
      await queryClient.setQueryData(['users'], context?.previousUsers)
      if (error instanceof AxiosError) {
        toast({
          title: `${error.response?.data.message}`,
          'aria-activedescendant': error.message,
          className: 'bg-gradient-to-t from-orange-100 to-orange-100',
        })
      }
    },
  })
}
