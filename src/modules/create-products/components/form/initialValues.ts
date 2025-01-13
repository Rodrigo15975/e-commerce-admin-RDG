export const initialValues: InitialValuesProduct = {
  products: [
    {
      product: '',
      productVariant: [
        {
          color: 'ffffff',
          image: null,
        },
      ],
      price: 0,
      size: [],
      gender: 'Female',
      brand: '',
      description: '',
      quantity: 0,
      is_new: true,
      category: '',
      discount: 0,
      productInventory: {
        minStock: 0,
        stock: false,
      },
    },
  ],
}

export const gender = [
  {
    value: 'Male',
  },
  {
    value: 'Female',
  },
  {
    value: 'Unisex',
  },
  {
    value: 'KidsK',
  },
  {
    value: 'Other',
  },
]
