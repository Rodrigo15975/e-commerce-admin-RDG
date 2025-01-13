import { z } from 'zod'
import { formSchemaUser } from './formSchemaUser'

type KeyInputUser = keyof Omit<z.infer<typeof formSchemaUser>, 'user_active'>

type FormInputUser = {
  name: KeyInputUser
  text: string
}

export const formInputUser: FormInputUser[] = [
  {
    name: 'phone',
    text: 'Phone',
  },
  {
    name: 'password',
    text: 'Password',
  },
  {
    name: 'role',
    text: 'Role',
  },
  {
    name: 'dni',
    text: 'DNI',
  },
  {
    name: 'name',
    text: 'Name',
  },
  {
    name: 'lastname',
    text: 'Lastname',
  },
]
