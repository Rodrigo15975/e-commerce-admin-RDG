import { z } from "zod"

export const formSchemaCategorie = z.object({
  category: z.string().min(1, { message: "Required" }),
})

type KeyInputCategorie = keyof z.infer<typeof formSchemaCategorie>

export type FormInputCategorie = {
  name: KeyInputCategorie
  text: string
}

export const formInputCategorie: FormInputCategorie[] = [
  {
    name: "category",
    text: "Categorie",
  },
]
