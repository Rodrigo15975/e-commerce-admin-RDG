'use client'
import Sidebar from '@/components/common/Sidebar/Sidebar'
// import { usePathname } from 'next/navigation'

export default function SidebarHandler({
  children,
}: {
  children?: React.ReactNode
}) {
  // const pathname = usePathname()

  // const isProtected = config.matcher.some(
  //   (route) =>
  //     pathname.startsWith(route) && !pathname.startsWith('/create-products')
  // )

  return (
    <>
      {/* {isProtected && <Sidebar />} */}
      <Sidebar />
      {children}
    </>
  )
}
