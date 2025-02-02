import { ColumnProps } from 'primereact/column'
import OrdersIdViewProdusct from './orders-id-view-produsct'

const OrdersIdColumns = () => {
  const products = (client: GetAllClients) => {
    return (
      <>
        <OrdersIdViewProdusct data={client} />
      </>
    )
  }

  const columns: ColumnProps[] = [
    {
      header: 'Client',
      field: 'nameGoogle',
      body: (client: GetAllClients) => `${client.nameGoogle}`,
    },
    {
      header: 'Email',
      field: 'emailGoogle',
    },
    {
      header: 'Order ID',
      field: 'orders.id',
      body: (client: GetAllClients) => `${client.id}`,
    },
    {
      header: 'Total Amount',
      field: 'clients.orders.amount_total',
      body: (client: GetAllClients) => `$${client.orders[0].amount_total}.00`,
    },
    {
      header: 'Products',
      field: '',
      body: (client: GetAllClients) => products(client),
    },
  ]

  return { columns }
}

export default OrdersIdColumns
