import { useGetAllProducts } from '@/modules/create-products/services/queries'
import { InitialValueUpdateProduct } from '../components/create/initial-value-update-product'

export const useFindByIdProduct = (id: number | undefined) => {
  const { data } = useGetAllProducts()
  const productFind = data?.find((product) => product.id === id)
  if (productFind) {
    const {
      brand,
      category,
      description,
      discount,
      gender,
      id,
      price,
      product,
      quantity,
      productInventory,
    } = productFind

    const valueToUpdateProductForm: InitialValueUpdateProduct = {
      product: product ?? '',
      category: category.category ?? '',
      brand: brand ?? '',
      quantity: quantity ?? 0,
      discount: discount ?? 0,
      price: price ?? 0,
      gender: gender ?? '',
      description: description ?? '',
      id: id ?? undefined,
      minStock: productInventory.minStock ?? 0,
    }
    return valueToUpdateProductForm
  }
}
