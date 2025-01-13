import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'
import {
  CreateArchiveProductVariant,
  UpdateProduct,
} from '../types/create-archive-variant.'

export const deleteProduct = async (id: number) =>
  await useMethods.DELETE<HttpResponse>(`${PathServices.PRODUCTS}/${id}`)

export const deleteArhive = async (key_url: string) =>
  await useMethods.DELETE<HttpResponse>(
    `${PathServices.PRODUCTS}?key=${key_url}`
  )

export const deleteSize = async ({
  id,
  size,
}: {
  id: number | undefined
  size: string
}) =>
  await useMethods.DELETE<HttpResponse>(
    `${PathServices.PRODUCTS}/size/${id}/${size}`
  )

export const createSize = async ({
  id,
  size,
}: {
  id: number | undefined
  size: string[]
}) =>
  await useMethods.POST<HttpResponse, string[]>(
    `${PathServices.PRODUCTS}/size/${id}`,
    size
  )

export const createArchiveProductVariant = async ({
  categorie,
  data,
  id,
}: CreateArchiveProductVariant) =>
  await useMethods.POST<HttpResponse, FormData>(
    `${PathServices.PRODUCTS}/one-variant/${id}/${categorie}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )

export const updateProduct = async (data: UpdateProduct) =>
  await useMethods.PATCH<HttpResponse, UpdateProduct>(
    `${PathServices.PRODUCTS}/${data.id}`,
    data
  )
