// 'use client'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

// Cargar el componente dinámicamente
const CreateProductsPage = dynamic(
  () => import('@/modules/create-products/page/createProductsPage'),
  { ssr: true }
)

const CreateProducts: NextPage  = () => {
  return <CreateProductsPage />
}

export default CreateProducts
