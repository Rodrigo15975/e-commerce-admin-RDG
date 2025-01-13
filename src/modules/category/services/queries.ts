import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllCategories } from './api'

export const useGetAllCategorys = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    staleTime: 1200000, // 20 minutos
    gcTime: 1200000, // 20 minutos
    // retry: 3,
    // retryDelay: 2000,
    placeholderData: keepPreviousData,
  })
