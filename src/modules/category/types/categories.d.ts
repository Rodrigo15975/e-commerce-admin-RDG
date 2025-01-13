interface Categories {
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

interface CreateCategorie {
  category: string
  id?: number | undefined
}

interface UpdateCategorie extends CreateCategorie {}
