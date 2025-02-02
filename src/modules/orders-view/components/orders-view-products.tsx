import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { convertedDayMonthYear } from '@/utils/formatDateIso8601'
import { Image } from 'primereact/image'
import { Package, Calendar } from 'lucide-react'
import { Tag } from 'primereact/tag'

type Props = {
  data: GetAllClients
}

const OrdersViewProducts = ({ data }: Props) => {
  const { orders } = data
  const ordersItems = orders.flatMap((item) => item.OrdersItems)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-100 text-primary" variant={'outline'}>
          View All Orders
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-screen-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Orders</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            View and manage all your orders
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {ordersItems.map((items) => (
            <Card
              key={items.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">
                    {items.product}
                  </CardTitle>
                  <Tag
                    severity={items.status === 'paid' ? 'success' : 'secondary'}
                  >
                    {items.status}
                  </Tag>
                </div>
                <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                  {items.description || 'No description available'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Size</p>
                    <p className="font-medium">{items.size}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Quantity</p>
                    <p className="font-medium">{items.quantity}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Price</p>
                    <p className="font-medium">${items.price}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Product Variants
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.ordersVariants.map((variant) => (
                      <div key={variant.id}>
                        <Image
                          width="100px"
                          src={variant.url}
                          alt={items.product}
                          // preview
                          imageClassName="object-contain  "
                          imageStyle={{ objectFit: 'cover' }}
                          height="100px"
                        />
                        <span className="">
                          <Badge variant="outline" className="text-xs">
                            {variant.color}
                          </Badge>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Package className="w-4 h-4 mr-2" />
                    <span>{items.status}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{convertedDayMonthYear(items.createdAt)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default OrdersViewProducts
