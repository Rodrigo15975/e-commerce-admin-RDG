import React, { PropsWithChildren } from 'react'

const Panel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className="xl:px-8 xl:py-6 xl:space-y-3 p-4 space-y-4 bg-slate-50/70">
      {children}
    </article>
  )
}

export default Panel
