import { z } from "zod"

type KeyInputLogin = keyof z.infer<typeof formSchemaLogin>

type FormInputLogin = {
  name: KeyInputLogin
  text: string
}

export const formInputLogin: FormInputLogin[] = [
  {
    name: "phone",
    text: "Phone number",
  },
  {
    name: "password",
    text: "Enter your password",
  },
]

export const formSchemaLogin = z.object({
  password: z.string().min(1, { message: "Required" }),
  phone: z.string().min(9, { message: "Min 9" }).max(9, { message: "Máx 9 " }),
})

export const defaultValuesLogin: Login = {
  password: "",
  phone: "",
}
