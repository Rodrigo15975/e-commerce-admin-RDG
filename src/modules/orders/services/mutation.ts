import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask } from './api'
import { GetAllTask } from './queries'
import { useToast } from '@/hooks/use-toast'

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationKey: ['create-task'],
    mutationFn: createTask,
    onMutate: async (newTaskTitle) => {
      await queryClient.cancelQueries({
        queryKey: ['tasks'],
      })

      const previousTasks = queryClient.getQueryData<GetAllTask[]>(['tasks'])

      queryClient.setQueryData<GetAllTask[]>(['tasks'], (oldData) => [
        ...(oldData ?? []),
        {
          id: Date.now().toString(), // ID temporal
          title: newTaskTitle,
          status: 'pending', // Mostrar estado optimista
        },
      ])

      return { previousTasks }
    },
    onSuccess: async (response, newTaskTitle) => {
      await queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
      queryClient.setQueryData<GetAllTask[]>(['tasks'], (oldData) =>
        oldData?.map((task) =>
          task.title === newTaskTitle ? { ...task, id: response.data.id } : task
        )
      )
      toast({
        title: 'Task created',
        description: response.message,
        duration: 3000,
        className:
          'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200',
      })
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['tasks'], context?.previousTasks)
      toast({
        title: 'Something went wrong',
        description: 'Please try again later',
        duration: 3000,
        variant: 'destructive',
      })
    },
  })
}
