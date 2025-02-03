import { convertedDayMonthYear } from '@/utils/formatDateIso8601'
import { Calendar } from 'lucide-react'
import { ColumnProps } from 'primereact/column'
import { Image } from 'primereact/image'
import { Tag } from 'primereact/tag'

const OrdersIdColumns = () => {
  const products = (client: OrdersItemClient) => {
    const { ordersVariants, product } = client
    return (
      <>
        <div className="flex justify-between flex-col gap-2 items-center">
          <div className="flex flex-col flex-wrap gap-2">
            {ordersVariants.map((variant) => (
              <div className="flex flex-col flex-wrap gap-2" key={variant.id}>
                <Image
                  width="100px"
                  src={variant.url}
                  alt={product}
                  preview
                  loading="lazy"
                  className="object-contain"
                  security="public-read"
                  imageClassName="object-contain  "
                  imageStyle={{ objectFit: 'cover' }}
                  height="100px"
                />
                {/* <span className="">
                  <Badge
                    style={{ backgroundColor: variant.color }}
                    variant="outline"
                    className="text-xs font-bold  h-6"
                  >
                    {variant.color}
                  </Badge>
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  const columns: ColumnProps[] = [
    {
      header: 'Products',
      // field: 'ordersItems.product',
      body: (client: OrdersItemClient) => `${client.product}`,
      // filter: true,
      // sortable: true,
    },
    {
      header: 'Size',
      // field: 'OrdersItems.size',
      // filter: true,
      // sortable: true,
      body: (client: OrdersItemClient) => `${client.size}`,
    },
    {
      header: 'Price',
      // field: 'OrdersItems.price',
      // filter: true,
      // sortable: true,
      body: (client: OrdersItemClient) => `$${client.price}.00`,
    },
    {
      header: 'Brand',
      // field: 'OrdersItems.brand',
      // filter: true,
      // sortable: true,
      body: (client: OrdersItemClient) => `${client.brand}`,
    },
    {
      header: 'Description',
      // field: 'OrdersItems.description',
      // filter: true,
      // sortable: true,
      body: (client: OrdersItemClient) => `${client.description}`,
    },
    {
      header: 'Quantity',
      // field: 'OrdersItems.quantity',
      // filter: true,
      // sortable: true,
      body: (client: OrdersItemClient) => `${client.quantity}`,
    },
    {
      header: 'Discount',
      // field: 'OrdersItems.discount',
      // filter: true,
      // sortable: true,
      body: (client: OrdersItemClient) => `${client.discount}`,
    },
    {
      header: 'Categorie',
      // field: 'OrdersItems.categorie',
      // filter: true,
      // sortable: true,
      body: (client: OrdersItemClient) => `${client.categorie}`,
    },
    {
      header: 'Status payment',
      // field: 'OrdersItems.status',
      // filter: true,
      // sortable: true,
      body: (client: OrdersItemClient) => (
        <>
          <Tag severity={client.status === 'paid' ? 'success' : 'danger'}>
            {client.status}
          </Tag>
        </>
      ),
    },
    {
      header: 'Image',
      body: (client: OrdersItemClient) => products(client),
    },
    {
      header: 'Created',
      // field: 'OrdersItems.createdAt',
      // filter: true,
      // sortable: true,
      body: (client: OrdersItemClient) => (
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{convertedDayMonthYear(client.createdAt)}</span>
        </div>
      ),
    },
  ]

  return { columns }
}

export default OrdersIdColumns
