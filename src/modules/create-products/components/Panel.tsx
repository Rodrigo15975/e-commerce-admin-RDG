'use client'
import { Panel } from 'primereact/panel'
import React from 'react'
import { ButtonOriginUI } from '@/components/ui/button-origin-ui'
import Link from 'next/link'
import FormProducts from './form/form'

const PanelCreateProducts = () => {
  return (
    <div className="md:p-8 bg-primary/5 min-h-screen">
      <Panel
        className="mx-auto max-w-screen-2xl font-poppins rounded shadow-md"
        headerTemplate={
          <div className="flex justify-between bg-primary/90 items-center px-2">
            <h1 className=" text-xl p-4 text-white font-semibold w-full h-full">
              Creating new Products
            </h1>
            <Link href={'/products'}>
              <ButtonOriginUI
                className="bg-white text-primary hover:bg-primary/90 hover:text-white"
                title="Back"
              />
            </Link>
          </div>
        }
      >
        <FormProducts />
      </Panel>
    </div>
  )
}

export default PanelCreateProducts
