'use client'
import LoadingSpinner from '@/components/ui/loading'
// import ProductsPage from '@/modules/products/pages/productsPage'
import dynamic from 'next/dynamic'

const ProductsPage = dynamic(
  () => import('@/modules/products/pages/productsPage'),
  {
    ssr: false,
    loading: () => <LoadingSpinner />,
  }
)

const Page = () => {
  return <ProductsPage />
}

export default Page
