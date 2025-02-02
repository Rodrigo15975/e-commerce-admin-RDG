import Table from '@/components/Table/Table'
import { useGetAllClients } from '../../services/queries'
import ColumnsOrdersTable from './columns-orders-table'

const OrdersTable = () => {
  const { data: clients, isLoading } = useGetAllClients()
  const { columns } = ColumnsOrdersTable()

  return (
    <>
      <Table
        columnsConfig={columns}
        data={clients}
        className="font-poppins"
        headerClassName="bg-primary !text-slate-50 font-normal"
        globalFilter=""
        loading={isLoading}
      />
    </>
  )
}

export default OrdersTable
