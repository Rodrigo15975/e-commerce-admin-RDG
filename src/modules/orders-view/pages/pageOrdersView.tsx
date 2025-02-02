'use client'
import TypographyTitle from '@/components/common/typographyTitle/typographyTitle'
import PanelOrdersView from '../components/panel-orders-view'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IoArrowBack } from 'react-icons/io5'
import { useGetAllClients } from '@/modules/orders/services/queries'

const PageOrdersView = () => {
  const { data: clients } = useGetAllClients()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white p-4 ">
        <div className="flex justify-between max-sm:flex-wrap gap-3">
          <TypographyTitle
            className="flex gap-2 items-center text-2xl"
            title={`Orders`}
          />
          <div className="flex gap-2 max-sm:w-full max-sm:justify-between">
            <Link href={'/orders'}>
              <Button size={'icon'}>
                <IoArrowBack />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <PanelOrdersView />
    </div>
  )
}

export default PageOrdersView
