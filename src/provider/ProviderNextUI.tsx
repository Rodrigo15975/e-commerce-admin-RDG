'use client'
import { NextUIProvider } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

const ProviderNextUI: FC<PropsWithChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

export default ProviderNextUI
