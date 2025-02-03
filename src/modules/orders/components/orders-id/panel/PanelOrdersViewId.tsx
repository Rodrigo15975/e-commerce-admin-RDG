import OrdersIdViewProducts from '../orders-id-view-produsct'
type Props = {
  client: GetAllClients | undefined
}
const PanelOrdersViewId = ({ client }: Props) => {
  return (
    <>
      <div className="md:mx-4 min-h-screen">
        <OrdersIdViewProducts data={client} />
      </div>
    </>
  )
}

export default PanelOrdersViewId
