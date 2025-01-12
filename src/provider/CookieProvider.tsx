"use client"
import { CookiesProvider } from "react-cookie"

import React, { FC, PropsWithChildren } from "react"

const CookieProviderClient: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CookiesProvider
      defaultSetOptions={{
        sameSite: 'lax',
        secure: true,
        httpOnly: true,
        path: '/',
      }}
    >
      {children}
    </CookiesProvider>
  )
}

export default CookieProviderClient
