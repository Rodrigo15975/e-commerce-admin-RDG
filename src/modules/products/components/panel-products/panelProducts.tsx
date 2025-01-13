import Panel from '@/components/common/Container/Panel'
import TypographyTitle from '@/components/common/typographyTitle/typographyTitle'
import React from 'react'
import PanelProductsTable from '../panel-products-table/panel-products-table'
import { ListOrderedIcon } from 'lucide-react'
import Link from 'next/link'
import { ButtonOriginUI } from '@/components/ui/button-origin-ui'

const PanelProducts = () => {
  return (
    <Panel>
      <div className="flex justify-between max-sm:flex-col">
        <TypographyTitle
          className="flex gap-2 items-center justify-center"
          title="Products"
        >
          <ListOrderedIcon />
        </TypographyTitle>
        <div className="max-sm:order-1 mt-2 flex justify-end">
          <Link href={'/create-products'}>
            <ButtonOriginUI
              title="Create Products"
              className="bg-[#150f22] hover:bg-primary/80 "
            />
          </Link>
        </div>
      </div>

      <div className="rounded bg-white border mt-16 w-full">
        <PanelProductsTable />
      </div>
    </Panel>
  )
}

export default PanelProducts
