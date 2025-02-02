import OrdersIdViewProducts from './orders-id-view-produsct'
type Props = {
  client: GetAllClients | undefined
}
const PanelOrdersViewId = ({ client }: Props) => {
  return (
    <>
      <div className="md:mx-4 bg-neutral-500/5 min-h-screen">
        <OrdersIdViewProducts data={client} />
      </div>
    </>
  )
}

export default PanelOrdersViewId
