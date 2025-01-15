import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'

export const getAllProducts = async () =>
  await useMethods.GET<FindAllProducts[]>(PathServices.PRODUCTS, {
    withCredentials: true,
  })

export const createProduct = async (data: CreateProduct) =>
  await useMethods.POST<HttpResponse, CreateProduct>(
    PathServices.PRODUCTS,
    data,
    {
      withCredentials: true,
    }
  )
