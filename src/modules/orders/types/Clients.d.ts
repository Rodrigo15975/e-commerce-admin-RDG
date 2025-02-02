interface OrdersVariantClient {
  id: string
  color: string
  url: string
  createdAt: string
  updatedAt: string
  ordersItemsId: string
}

interface OrdersItemClient {
  id: string
  product: string
  size: string[]
  price: string
  brand: string
  description: string
  quantity: number
  discount: number
  categorie: string
  status: string
  orderId: string
  createdAt: string
  updatedAt: string
  ordersVariants: OrdersVariantClient[]
}

interface OrderClient {
  id: string
  clientsId: string
  amount_total: string
  createdAt: string
  updatedAt: string
  OrdersItems: OrdersItemClient[]
}

interface CouponClient {
  id: string
  discount: number
  startDate: string
  espiryDate: string
  expired: boolean
  code: string
  createAt: string
  updateAt: string
  clientsId: string
}

interface Client {
  id: string
  userIdGoogle: string
  emailGoogle: string
  nameGoogle: string
  createdAt: string
  updatedAt: string
  contact: null | string
  coupon: CouponClient
  orders: OrderClient[]
  _count: {
    orders: number
  }
}

type GetAllClients = Client
