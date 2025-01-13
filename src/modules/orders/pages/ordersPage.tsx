import Container from '@/components/common/Container/Container'
import Header from '@/components/common/header/Header'
import React from 'react'
import OrdersPanel from '../components/orders-panel/ordersPanel'

const OrdersPage = () => {
  return (
    <Container>
      <Header />
      <OrdersPanel />
    </Container>
  )
}

export default OrdersPage
