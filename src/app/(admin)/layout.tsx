import SidebarHandler from '@/provider/sidebarHandler'

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
