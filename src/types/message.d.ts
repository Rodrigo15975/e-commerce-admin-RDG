interface HttpResponse {
  message: string
  service: string
  statusCode: number
  timestamp: number
  id: number
}
interface Cookies {
  auth: string
}

interface VerifyToken {
  message: string
  statusCode: number
  success: boolean
  token: string
  userId?: number
}
