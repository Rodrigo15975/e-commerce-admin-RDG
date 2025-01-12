import { AxiosError } from 'axios'

export const instanceOfAxios = (error: Error | unknown) =>
  error instanceof AxiosError && error
