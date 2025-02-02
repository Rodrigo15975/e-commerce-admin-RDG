import CookieProviderClient from '@/provider/CookieProvider'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import ProviderNextUI from '@/provider/ProviderNextUI'
import QueryProvides from '@/provider/ReeactQueryProvider'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/soho-light/theme.css'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { ConfirmPopup } from 'primereact/confirmpopup'

export const metadata: Metadata = {
  title: 'RDG Admin',
  description: 'ADMIN',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#000002"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={500}
          zIndex={999999999}
          showAtBottom={false}
        />
        <QueryProvides>
          <PrimeReactProvider value={{}}>
            <AnimatePresence>
              <CookieProviderClient>
                <LazyMotion features={domAnimation}>
                  <ProviderNextUI>
                    {children}
                    <Toaster />
                    <ConfirmPopup />
                  </ProviderNextUI>
                </LazyMotion>
              </CookieProviderClient>
            </AnimatePresence>
          </PrimeReactProvider>
        </QueryProvides>
      </body>
    </html>
  )
}
