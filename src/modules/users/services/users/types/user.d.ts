interface User {
  id: number

  dni: string
  phone: string
  name: string
  password: string
  avatar: string
  lastname: string
  user_active: boolean

  createdAt: Date | string
  updatedAt: Date | string
  role: {
    id: number
    role: string
  }
  roleId: number
  auditoria: {
    name: string
    dni: string
    lastname: string
    avatar: string | null
  }
}

interface CreateUser
  extends Omit<
    User,
    "updatedAt" | "createdAt" | "role" | "roleId" | "id" | "avatar"
  > {
  role: string
  id: number | undefined
  auditoria: {
    id?: number
    role?: string
  }
}

interface UpdateUser extends Omit<CreateUser, "role"> {
  role: {
    role: string
  }
}
