/**
 * @Product_creating
 */
interface Product {
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

interface ProductVariant {
  color: string
  image: null | File
  url?: string
}

interface ProductInventory {
  minStock: number
  stock: boolean
}

interface InitialValuesProduct {
  products: Product[]
}

interface FindAllProducts
  extends Omit<Product, 'categorie' | 'productVariant'> {
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

interface CreateProduct extends FormData {}
