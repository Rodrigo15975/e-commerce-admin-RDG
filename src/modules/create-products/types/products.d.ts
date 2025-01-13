/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * @Product_creating
 */
type Product = {
  id?: number
  product: string
  productVariant: ProductVariant[]
  price: number
  size: string[]
  gender: string
  brand: string
  description: string
  quantity: number
  is_new: boolean
  category: string
  discount: number
  productInventory: ProductInventory
}

type ProductVariant = {
  color: string
  image: null | File
  url?: string
}

type ProductInventory = {
  minStock: number
  stock: boolean
}

type InitialValuesProduct = {
  products: Product[]
}

type FindAllProducts = Omit<Product, 'categorie' | 'productVariant'> & {
  productVariant: {
    id: number
    key_url: string
    color: string
    url: string
  }[]
  category: {
    id: number
    category: string
    createdAt?: string
    updatedAt?: string
  }
}

type CreateProduct = FormData
