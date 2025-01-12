// Dependencies: pnpm install lucide-react

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Archive, ChevronRight, Plus } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  className?: string
  iconLeft?: boolean
}

export function ButtonOriginUI({
  title,
  className,

  ...props
}: ButtonProps) {
  return (
    <Button {...props} className={`relative pe-12 ${cn(className)} `}>
      {title}
      <span className="pointer-events-none absolute inset-y-0 end-0 flex w-9 items-center justify-center bg-primary-foreground/15">
        <ChevronRight
          className="opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
    </Button>
  )
}

export function ButtonRemoveOriginUI({
  title,
  className,
  ...props
}: ButtonProps) {
  return (
    <Button
      {...props}
      type={props.type}
      variant={'destructive'}
      className={`relative pe-12 ${cn(className)} bg-red-400`}
    >
      <Archive
        className="-ms-1 me-2 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      {title}
    </Button>
  )
}

export default function ButtonAddOriginUI({ ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      variant="outline"
      className={`aspect-square max-sm:p-0 ${cn(props.className)}`}
    >
      <Plus
        className="opacity-60 sm:-ms-1 sm:me-2"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      <span className="max-sm:sr-only">{props.title}</span>
    </Button>
  )
}
