import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const TypographyTitle = ({
  title,
  children,
  className,
}: {
  title: string
  children?: ReactNode

  className?: string
}) => (
  <h1
    className={`text-3xl max-sm:w-full max-sm:order-1 max-sm:text-center font-medium text-primary ${cn(
      className
    )} `}
  >
    {title}
    {children}
  </h1>
)

export default TypographyTitle
