'use client'

import LoadingSpinner from '@/components/ui/loading'
import dynamic from 'next/dynamic'

// Cargar el componente dinámicamente
const CreateProductsPage = dynamic(
  () => import('@/modules/create-products/page/createProductsPage'),
  { ssr: false, loading: () => <LoadingSpinner /> }
)

const CreateProducts = () => {
  return <CreateProductsPage />
}

export default CreateProducts
