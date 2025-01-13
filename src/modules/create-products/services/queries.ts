import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { getAllProducts } from './api'

export const useGetAllProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    staleTime: 600000, // 10 minutos
    gcTime: 1200000, // 20 minutos
    // retry: 3,
    // retryDelay: 2000,
    placeholderData: keepPreviousData,
  })
