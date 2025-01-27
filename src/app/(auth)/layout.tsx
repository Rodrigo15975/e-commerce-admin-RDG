import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Auth Admin',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
