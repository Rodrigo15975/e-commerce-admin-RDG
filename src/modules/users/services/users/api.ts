import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'

export const updateUpdate = async (data: UpdateUser) =>
  await useMethods.PATCH<HttpResponse, UpdateUser>(
    `${PathServices.USER}/${data.id}`,
    data,
    {
      withCredentials: true,
    }
  )

export const createUser = async (data: CreateUser) =>
  await useMethods.POST<HttpResponse, CreateUser>(
    `${PathServices.USER}`,
    data,
    {
      withCredentials: true,
    }
  )

export const getProfileUser = async () =>
  await useMethods.GET<User>(`${PathServices.USER}${PathServices.PROFILE}`, {
    withCredentials: true,
  })

export const deleteUser = async (id: number) =>
  await useMethods.DELETE<HttpResponse>(`${PathServices.USER}/${id}`, {
    withCredentials: true,
  })

export const getAllUser = async () =>
  await useMethods.GET<User[]>(`${PathServices.URL}${PathServices.USER}`, {
    withCredentials: true,
  })
