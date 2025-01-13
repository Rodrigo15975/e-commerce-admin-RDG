import { z } from 'zod'

const productVariantSchema = z.object({
  color: z.string().min(1, 'Color is required'),
  image: z.instanceof(File, { message: 'A valid file is required' }),
  // .refine((file) => file.size > 0, { message: 'File cannot be empty' }),
})

const productInventorySchema = z.object({
  minStock: z.preprocess(
    (value) => Number(value),
    z.number().min(0, 'Minimum stock must be 0 or greater')
  ),
  stock: z.boolean(),
})
export const sizeSchema = z.object({
  size: z
    .array(z.string().min(1, 'Size is required'))
    .min(1, 'At least one size must be selected'),
})

export const productSchema = z.object({
  product: z.string().min(1, 'Product name is required'),
  productVariant: z
    .array(productVariantSchema)
    .min(1, 'At least one product variant is required'),
  price: z.preprocess((value) => Number(value), z.number().min(0)),
  size: z
    .array(z.string().min(1, 'Size is required'))
    .min(1, 'At least one size must be selected'),
  gender: z.string().min(1, 'Gender is required'),
  brand: z.string().min(1, 'Brand is required'),
  description: z.string().nullable().optional(),
  quantity: z.preprocess(
    (value) => Number(value),
    z.number().min(0, 'Quantity must be 0 or greater')
  ),
  is_new: z.boolean(),
  category: z.string().min(1, 'Category is required'),
  discount: z.preprocess(
    (value) => Number(value),
    z.number().min(0, 'Discount must be 0 or greater')
  ),
  productInventory: productInventorySchema,
})

const initialValuesSchema = z.object({
  products: z.array(productSchema).min(1, 'At least one product is required'),
})

export default initialValuesSchema
