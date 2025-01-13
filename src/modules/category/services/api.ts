import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'

export const getAllCategories = async () =>
  await useMethods.GET<Categories[]>(PathServices.CATEGORIES)

export const createCategorie = async (data: CreateCategorie) =>
  await useMethods.POST<HttpResponse, CreateCategorie>(
    PathServices.CATEGORIES,
    data
  )

export const updateCategorie = async (data: UpdateCategorie) =>
  await useMethods.PATCH<HttpResponse, UpdateCategorie>(
    `${PathServices.CATEGORIES}/${data.id}`,
    data
  )

export const deleteCategorie = async (id: number) =>
  await useMethods.DELETE<HttpResponse>(`${PathServices.CATEGORIES}/${id}`)

export const createCategorieDiscount = async (data: CreateDiscountCategory) =>
  await useMethods.POST<HttpResponse, CreateDiscountCategory>(
    `${PathServices.CATEGORIESDISCOUNT}/${data.categoryId}`,
    data
  )

export const updateCategorieDiscount = async (data: CreateDiscountCategory) =>
  await useMethods.PATCH<HttpResponse, CreateDiscountCategory>(
    `${PathServices.CATEGORIESDISCOUNT}/${data.id}`,
    data
  )
