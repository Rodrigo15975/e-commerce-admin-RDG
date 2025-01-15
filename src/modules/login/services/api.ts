import { useMethods } from '@/adapters/methods'
import { PathServices } from '@/pathServices/pathServices'

export const auth = async (data: Login) =>
  await useMethods.POST<HttpResponse & Cookies, Login>(
    `${PathServices.URL}${PathServices.AUTH}`,
    data,
    {
      withCredentials: true,
    }
  )

export const verifyToken = async (token: string | undefined) => {
  try {
    const data = await useMethods.GET<VerifyToken>(
      `${PathServices.VERIFY_TOKEN}/${token}`,
      {
        withCredentials: true,
      }
    )

    return data
  } catch (error) {
    console.error(error)

    return { message: null, statusCode: null, success: false, error }
  }
}

export const logout = async () =>
  await useMethods.GET<{
    auth: string
    statusCode: number
    success: boolean
  }>(PathServices.LOGOUT, {
    withCredentials: true,
  })
