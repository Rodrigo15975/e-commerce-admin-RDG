// eslint-disable-next-line @typescript-eslint/no-empty-interface
type Categories = {
  label: ReactNode
  id: number
  category: string
  discountRules?: {
    id: number
    categoryId: string
    discount: number
    start_date: string
    end_date: string
    is_active: true
  }[]
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
type CreateCategorie = {
  category: string
  id?: number | undefined
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
type UpdateCategorie = CreateCategorie
