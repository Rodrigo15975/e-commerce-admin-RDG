'use client'
import Sidebar from '@/components/common/Sidebar/Sidebar'
import { usePathname } from 'next/navigation'

export default function SidebarHandler({
  children,
}: {
  children?: React.ReactNode
}) {
  const pathname = usePathname()

  const isCreateProducts = pathname.startsWith('/create-products')

  return (
    <>
      {!isCreateProducts && <Sidebar />}
      {children}
    </>
  )
}
