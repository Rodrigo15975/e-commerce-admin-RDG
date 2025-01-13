import Container from '@/components/common/Container/Container'
import Header from '@/components/common/header/Header'
import React from 'react'
import PanelCategory from '../components/panel-category/panelCategory'
import '../styles/index.css'
const CategoryPage = () => {
  return (
    <Container>
      <Header />
      <PanelCategory />
    </Container>
  )
}

export default CategoryPage
