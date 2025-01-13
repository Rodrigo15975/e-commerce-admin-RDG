export type InitialValueUpdateProduct = Partial<
  Omit<Product, 'productVariant' | 'productInventory' | 'is_new' | 'size'>
> & {
  minStock?: number
}

export const productFieldsUpdateProduct: FormInputProduct[] = [
  { name: 'category', label: 'Categorie', type: 'text' },
  { name: 'product', label: 'Product Name', type: 'text' },
  { name: 'quantity', label: 'Quantity', type: 'number' },
  { name: 'price', label: 'Price', type: 'number' },
  { name: 'gender', label: 'Gender', type: 'text' },
  { name: 'brand', label: 'Brand', type: 'text' },
  { name: 'discount', label: 'Discount (%)', type: 'number' },
  { name: 'minStock', label: 'Minstock', type: 'text' },
  { name: 'description', label: 'Description', type: 'text' },
]
export type KeyInputProduct = keyof InitialValueUpdateProduct

type FormInputProduct = {
  name: KeyInputProduct
  label: string
  type?: string
}
