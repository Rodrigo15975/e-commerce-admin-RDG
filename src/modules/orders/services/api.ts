import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'

export const getAllClients = async () =>
  await useMethods.GET<GetAllClients[]>(PathServices.CLIENTS)
