import qs from 'qs'

// Función para convertir el formulario a FormData
const convertToFormData = (data: InitialValuesProduct): FormData => {
  const formData = new FormData()

  data.products.forEach((product, productIndex) => {
    formData.append(`products[${productIndex}][product]`, product.product)
    formData.append(
      `products[${productIndex}][price]`,
      product.price.toString()
    )
    formData.append(`products[${productIndex}][gender]`, product.gender)
    formData.append(`products[${productIndex}][brand]`, product.brand)
    formData.append(
      `products[${productIndex}][description]`,
      product.description
    )
    formData.append(
      `products[${productIndex}][quantity]`,
      product.quantity.toString()
    )
    formData.append(
      `products[${productIndex}][is_new]`,
      product.is_new.toString()
    )
    formData.append(`products[${productIndex}][category]`, product.category)
    formData.append(
      `products[${productIndex}][discount]`,
      product.discount.toString()
    )

    // Manejo del inventario
    formData.append(
      `products[${productIndex}][productInventory][minStock]`,
      product.productInventory.minStock.toString()
    )
    formData.append(
      `products[${productIndex}][productInventory][stock]`,
      product.productInventory.stock.toString()
    )

    // Manejo de variantes
    product.productVariant.forEach((variant, variantIndex) => {
      formData.append(
        `products[${productIndex}][productVariant][${variantIndex}][color]`,
        variant.color
      )
      if (variant.image) {
        formData.append(
          `products[${productIndex}][productVariant][${variantIndex}][image]`,
          variant.image
        )
      }
    })

    // Manejo de tallas
    product.size.forEach((size, sizeIndex) => {
      formData.append(`products[${productIndex}][size][${sizeIndex}]`, size)
    })
  })

  return formData
}

export const convertFormDataToOriginal = <T>(formData: FormData): T => {
  // Convertimos FormData a un objeto simple
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formDataObject: Record<string, any> = {}
  formData.forEach((value, key) => {
    formDataObject[key] = value
  })

  // Usamos qs para analizar la estructura anidada
  const parsedData = qs.parse(formDataObject, { depth: Infinity })

  return parsedData as T
}
export default convertToFormData
