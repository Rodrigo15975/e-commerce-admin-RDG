import { useMethods } from '@/adapters/methods'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export type GetAllTask = {
  id: string
  title: string
}

export const useGetAllTask = () =>
  useQuery({
    queryKey: ['tasks'],
    queryFn: async () => await useMethods.GET<GetAllTask[]>('/task'),
    staleTime: 600000, // 10 minutos
    gcTime: 1200000, // 20 minutos
    retry: 3,
    retryDelay: 2000,
    placeholderData: keepPreviousData,
  })
