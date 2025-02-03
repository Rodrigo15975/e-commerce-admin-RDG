'use client'
import Panel from '@/components/common/Container/Panel'
import TypographyTitle from '@/components/common/typographyTitle/typographyTitle'
import OrdersTable from '../table/orders-table'
import { Button } from '@/components/ui/button'
import { ClipboardList } from 'lucide-react'
import Link from 'next/link'
import { useGetAllClients } from '../../services/queries'

const OrdersPanel = () => {
  const { data: clients } = useGetAllClients()
  return (
    <Panel>
      <div className="flex justify-between max-sm:flex-wrap gap-3">
        <TypographyTitle title="Orders" />
        <div className="flex gap-2 max-sm:w-full max-sm:justify-between">
          {clients?.length === 0 ? (
            <p>No orders</p>
          ) : (
            <Link href={'/orders/view-orders'}>
              <Button className="space-x-2 bg-white" variant={'outline'}>
                View all orders <ClipboardList />{' '}
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="rounded bg-white border mt-16 w-full">
        <OrdersTable />
      </div>
    </Panel>
  )
}

export default OrdersPanel
