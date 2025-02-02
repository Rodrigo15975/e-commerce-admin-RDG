import OrdersIdPanel from '@/modules/orders/components/orders-id/orders-id-panel'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params
  return <OrdersIdPanel id={id} />
}

export default Page
