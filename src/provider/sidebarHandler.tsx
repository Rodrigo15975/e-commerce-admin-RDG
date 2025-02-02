'use client'
import Sidebar from '@/components/common/Sidebar/Sidebar'
import { usePathname } from 'next/navigation'

export default function SidebarHandler({
  children,
}: {
  children?: React.ReactNode
}) {
  const pathname = usePathname()
  const pathsExcludes = ['/create-products', '/orders/view-orders']
  const isExcluded = pathsExcludes.some((path) => pathname.startsWith(path))

  return (
    <>
      {!isExcluded && <Sidebar />}
      {children}
    </>
  )
}
