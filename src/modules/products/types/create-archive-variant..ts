import { InitialValueUpdateProduct } from '../components/create/initial-value-update-product'

export interface CreateArchiveProductVariant {
  data: FormData
  id: number | undefined
  categorie: string
}

export interface UpdateProduct extends InitialValueUpdateProduct {}
