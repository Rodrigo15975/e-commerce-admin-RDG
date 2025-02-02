import { useGetAllClients } from '../../services/queries'

export const useGetOrderByIdClient = (id: string) => {
  const { data: clients } = useGetAllClients()
  if (!clients) return
  return clients?.find((client) => client.id === id)
}
