import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllCoupons } from './api'

export const useGetAllCoupons = () =>
  useQuery({
    queryKey: ['coupons'],
    queryFn: getAllCoupons,
    // refetchInterval: 600000, // 1 minuto entre refrescos

    staleTime: 600000, // 10 minutos
    gcTime: 1200000, // 20 minutos
    retry: 3,
    retryDelay: 2000,
    placeholderData: keepPreviousData,
  })
