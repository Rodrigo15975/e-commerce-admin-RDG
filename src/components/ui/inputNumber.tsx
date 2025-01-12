import { cn } from '@/lib/utils'
import {
  InputNumber,
  InputNumberValueChangeEvent,
  InputNumberProps,
} from 'primereact/inputnumber'
import { FormLabel } from './form'

interface Props extends InputNumberProps {
  className?: string
  // eslint-disable-next-line no-unused-vars
  onValueChange: (e: InputNumberValueChangeEvent) => void
  value?: number | null
}

const InputNumberUI = ({ onValueChange, value, ...props }: Props) => {
  return (
    <div className="">
      <FormLabel className="text-primary/60 font-medium text-[16px]">
        {props.title}
      </FormLabel>
      <InputNumber
        unstyled
        onValueChange={onValueChange}
        value={value}
        inputClassName={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:ring-2 focus:ring-primary/50 text-primary font-medium border-none outline-none shadow transition-all rounded w-full ring-1 ring-blue-300/20 mt-2'
        )}
        {...props}
      />
    </div>
  )
}

export default InputNumberUI
