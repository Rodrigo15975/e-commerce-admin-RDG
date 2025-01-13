import { z } from 'zod'
import { productSchema } from './schema/schema'

export type KeyInputProduct = keyof z.infer<typeof productSchema>

type FormInputProduct = {
  products: {
    name: KeyInputProduct
    label: string
    type?: string
  }[]
}

export const productFields: FormInputProduct = {
  products: [
    { name: 'category', label: 'Categorie', type: 'text' },
    { name: 'product', label: 'Product Name', type: 'text' },
    { name: 'quantity', label: 'Quantity', type: 'number' },
    { name: 'price', label: 'Price', type: 'number' },
    { name: 'gender', label: 'Gender', type: 'text' },
    { name: 'brand', label: 'Brand', type: 'text' },
    { name: 'discount', label: 'Discount (%)', type: 'number' },
    { name: 'description', label: 'Description', type: 'text' },
  ],
}
export const inputSize = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: 'XXL', label: 'XXL' },
]

export const inputProductInventory = [
  {
    name: 'productInventory',
    label: 'Min Stock',
  },
  {
    name: 'productInventory',
    label: 'In Stock',
  },
]

export const inputProductVariant = [
  {
    name: 'productVariant',
    label: 'Color (Variant 1)',
  },
  {
    name: 'productVariant',
    label: 'Image (Variant 1)',
  },
]
