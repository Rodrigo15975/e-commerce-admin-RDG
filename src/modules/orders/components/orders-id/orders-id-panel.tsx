'use client'

import TypographyTitle from '@/components/common/typographyTitle/typographyTitle'
import { useGetOrderByIdClient } from '../hooks/useGetOrdersByIdClient'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IoArrowBack } from 'react-icons/io5'
import PanelOrdersViewId from './panel/PanelOrdersViewId'

const OrdersIdPanel = ({ id }: { id: string }) => {
  const ordersClient = useGetOrderByIdClient(id)

  return (
    <>
      <div className="min-h-screen md:px-8 px-4 bg-gray-50">
        <div className="bg-white p-4 ">
          <div className="flex justify-between max-sm:flex-wrap gap-3">
            <TypographyTitle
              className="flex gap-2 items-center text-2xl"
              title={`Orders Client: ${ordersClient?.nameGoogle} `}
            />
            <div className="flex gap-2 max-sm:w-full max-sm:justify-end">
              <Link href={'/orders'}>
                <Button size={'icon'}>
                  <IoArrowBack />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <PanelOrdersViewId client={ordersClient} />
      </div>
    </>
  )
}

export default OrdersIdPanel
