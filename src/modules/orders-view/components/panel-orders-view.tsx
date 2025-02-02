'use client'
import Table from '@/components/Table/Table'
import { useGetAllClients } from '@/modules/orders/services/queries'
import ColumnsOrdersViewTable from './columns-orders-view'

const PanelOrdersView = () => {
  const { data: clients, isLoading } = useGetAllClients()
  const { columns } = ColumnsOrdersViewTable()
  return (
    <div className="md:mx-4 bg-primary/5 min-h-screen">
      <Table
        className="min-h-screen font-poppins"
        headerClassName="bg-primary !w-full !text-slate-50 font-normal"
        loading={isLoading}
        data={clients}
        columnsConfig={columns}
        globalFilter=""
      />
    </div>
  )
}

export default PanelOrdersView
