'use server'
import { useMethods } from '@/adapters/methods'
export const createTask = async (title: string) =>
  await useMethods.POST<
    {
      message: string
      data: {
        id: string
        title: string
      }
    },
    { title: string }
  >('/task', { title })
