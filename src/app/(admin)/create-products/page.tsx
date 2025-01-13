'use client'

import dynamic from 'next/dynamic'

// Cargar el componente dinámicamente
const CreateProductsPage = dynamic(
  () => import('@/modules/create-products/page/createProductsPage'),
  { ssr: false }
)

const CreateProducts = () => <CreateProductsPage />

export default CreateProducts
