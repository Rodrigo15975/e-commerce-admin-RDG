import { useToast } from '@/hooks/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import { auth, logout } from './api'
export const useAuth = () => {
  const { toast } = useToast()
  const [, setCookie] = useCookies(['auth'])
  const router = useRouter()

  return useMutation({
    mutationFn: auth,
    onSuccess(data) {
      const { auth } = data
      if (auth) {
        setCookie('auth', auth)
        router.push('/dashboard')
      }
    },
    onError(error: AxiosError<{ message: string }>) {
      console.error(error)
      if (error.response?.data.message) {
        const { message } = error.response.data
        toast({
          title: message,
          className: 'bg-gradient-to-t from-orange-200 to-orange-200',
        })
      }
      toast({
        title: 'Error in login',
        'aria-activedescendant': error.message,
        className: 'bg-gradient-to-t from-orange-200 to-orange-200',
      })
    },
  })
}

export const useLogout = () => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const [, setCookie] = useCookies(['auth'])
  const router = useRouter()

  return useMutation({
    mutationFn: logout,
    async onSuccess(data) {
      if (data.success) {
        setCookie('auth', data.auth)
        router.push('/login', {
          scroll: false,
        })
        await queryClient.cancelQueries()
        queryClient.clear()
      }
    },
    onError(error: AxiosError) {
      toast({
        title: 'Error al cerrar sesión',
        'aria-activedescendant': error.message,
        variant: 'destructive',
      })
    },
  })
}
