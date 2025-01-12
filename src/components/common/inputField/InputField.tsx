import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const InputField = ({
  field,
  label,
  type,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any
  label: string
  type?: string
}) => {
  return (
    <FormItem className="w-full">
      <FormLabel className="text-primary/60 font-medium text-[16px]">
        {label}
      </FormLabel>
      <FormControl>
        <Input
          type={type}
          className="focus:ring-2 focus:ring-primary/50 text-primary font-medium border-none outline-none shadow transition-all rounded w-full ring-1 ring-blue-300/20"
          {...field}
          onChange={(e) =>
            field.onChange(
              type === 'number' ? Number(e.target.value) : e.target.value
            )
          }
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}
