import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export const useGetAllRoles = () =>
  useQuery({
    queryFn: getAllRoles,
    queryKey: ['roles'],
    staleTime: 600000, // 10 minutos
    gcTime: 1200000, // 20 minutos
    retry: 3,
    retryDelay: 2000,
    placeholderData: keepPreviousData,
  })

const getAllRoles = async () =>
  await useMethods.GET<Roles[]>(`${PathServices.URL}${PathServices.ROLE}`)
