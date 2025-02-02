import { ClipboardList } from 'lucide-react'
import Link from 'next/link'
import { Button } from 'primereact/button'
import { ColumnProps } from 'primereact/column'
import { Tag } from 'primereact/tag'
const ColumnsOrdersTable = () => {
  const viewOrders = (client: GetAllClients) => {
    return (
      <>
        <Link href={`/orders/view-orders/${client.id}`}>
          <Button
            tooltip="View orders"
            tooltipOptions={{
              position: 'top',
            }}
          >
            <ClipboardList />
          </Button>
        </Link>
      </>
    )
  }

  const columns: ColumnProps[] = [
    {
      header: 'Client',
      field: 'nameGoogle',
    },
    {
      header: 'Email',
      field: 'emailGoogle',
    },
    {
      header: 'Coupon Discount',
      field: 'discount',
      body: (client: GetAllClients) => `${client.coupon.discount}%`,
    },
    {
      header: 'Coupon Expirated',
      field: 'client.coupon.expired',
      body: (client: GetAllClients) => (
        <>
          <Tag severity={client.coupon.expired ? 'danger' : 'success'}>
            {client.coupon.expired ? 'Expired' : 'Valid'}
          </Tag>
        </>
      ),
    },
    {
      header: 'Total orders',
      field: '',
      body: (client: GetAllClients) => <>{client.orders.length}</>,
    },
    {
      header: 'Orders',
      field: '',
      body: (client: GetAllClients) => viewOrders(client),
    },
  ]
  return { columns }
}

export default ColumnsOrdersTable
