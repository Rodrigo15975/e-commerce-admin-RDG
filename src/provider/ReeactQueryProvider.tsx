'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const QueryProvides: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default QueryProvides
