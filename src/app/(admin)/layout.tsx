import SidebarHandler from '@/provider/sidebarHandler'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Dashboard Admin',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SidebarHandler />
      {children}
    </>
  )
}
