import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllClients } from './api'

export const useGetAllClients = () =>
  useQuery({
    queryKey: ['clients'],
    queryFn: getAllClients,
    staleTime: 1200000,
    gcTime: 1200000,
    retry: 5,
    retryDelay: 10000,
    placeholderData: keepPreviousData,
  })
