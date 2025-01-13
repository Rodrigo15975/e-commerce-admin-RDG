'use client'
import React from 'react'
import Table from '@/components/Table/Table'
import { CiViewList } from 'react-icons/ci'
import ColumnsProductsPanel from './columns-producst-panel'
import { useGetAllProducts } from '@/modules/create-products/services/queries'

const PanelProductsTable = () => {
  const { columns } = ColumnsProductsPanel()
  const { data, isLoading } = useGetAllProducts()
  return (
    <>
      <Table
        columnsConfig={columns}
        data={data}
        className="font-poppins w-full "
        headerClassName="text-primary bg-primary text-white  border-t border-b font-normal"
        loading={isLoading}
        row={20}
        header={
          <h1 className="font-light ring-1 ring-primary/15 flex items-center gap-2 bg-white p-4 rounded text-primary/80">
            List of Products <CiViewList />
          </h1>
        }
        globalFilter=""
      />
    </>
  )
}

export default PanelProductsTable
