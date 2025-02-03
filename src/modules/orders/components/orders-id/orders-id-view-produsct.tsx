import Table from '@/components/Table/Table'
import { Label } from '@/components/ui/label'
import OrdersIdColumns from './orders-id-columns'

type Props = {
  data: GetAllClients | undefined
}

const OrdersIdViewProducts = ({ data }: Props) => {
  if (data) {
    const { columns } = OrdersIdColumns()
    const { orders } = data
    const ordersItems = orders.flatMap((item) => item.OrdersItems)

    const renderHeader = () => {
      return (
        <div className="flex items-start flex-col gap-4">
          <Label className="text-primary font-medium text-pretty text-2xl">
            Total Amount: <span>${orders[0].amount_total}.00</span>
          </Label>
        </div>
      )
    }
    const header = renderHeader()
    return (
      <>
        <Table
          data={ordersItems}
          className="font-poppins"
          header={header}
          headerClassName="bg-primary !text-slate-50 font-normal"
          columnsConfig={columns}
          globalFilter={''}
        />
      </>
    )
  }
}
export default OrdersIdViewProducts
