import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'View Orders',
}

const LayoutViewOrders: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>
}

export default LayoutViewOrders
