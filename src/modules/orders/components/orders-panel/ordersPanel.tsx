'use client'
import Panel from '@/components/common/Container/Panel'
import TypographyTitle from '@/components/common/typographyTitle/typographyTitle'
import OrdersTable from '../table/orders-table'
import { Button } from '@/components/ui/button'
import { ClipboardList } from 'lucide-react'
import Link from 'next/link'

const OrdersPanel = () => {
  return (
    <Panel>
      <div className="flex justify-between max-sm:flex-wrap gap-3">
        <TypographyTitle title="Orders" />
        <div className="flex gap-2 max-sm:w-full max-sm:justify-between">
          <Link href={'/orders/view-orders'}>
            <Button className="space-x-2 bg-white" variant={'outline'}>
              View all orders <ClipboardList />{' '}
            </Button>
          </Link>
        </div>
      </div>
      <div className="rounded bg-white border mt-16 w-full">
        <OrdersTable />
      </div>
    </Panel>
  )
}

export default OrdersPanel
