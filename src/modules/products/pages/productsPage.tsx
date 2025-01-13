import Container from '@/components/common/Container/Container'
import Header from '@/components/common/header/Header'
import React from 'react'
import PanelProducts from '../components/panel-products/panelProducts'
import '../styles/index.css'
const ProductsPage = () => {
  return (
    <Container>
      <Header />
      <PanelProducts />
    </Container>
  )
}

export default ProductsPage
