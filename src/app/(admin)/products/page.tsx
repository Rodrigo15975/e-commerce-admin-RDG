'use client'
// import ProductsPage from '@/modules/products/pages/productsPage'
import dynamic from 'next/dynamic'

const ProductsPage = dynamic(
  () => import('@/modules/products/pages/productsPage'),
  { ssr: false }
)

const Page = () => {
  return <ProductsPage />
}

export default Page
