import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllUser, getProfileUser } from './api'

export const useGetAllUsers = () =>
  useQuery({
    queryFn: () => getAllUser(),
    queryKey: ['users'],
    staleTime: 600000, // 10 minutos
    gcTime: 1200000, // 20 minutos
    retry: 3,
    retryDelay: 2000,
    placeholderData: keepPreviousData,
  })

export const useGetProfile = () =>
  useQuery({
    queryFn: getProfileUser,
    queryKey: ['profile'],
    staleTime: 600000, // 10 minutos
    gcTime: 1200000, // 20 minutos
    retry: 3,
    retryDelay: 2000,
  })
