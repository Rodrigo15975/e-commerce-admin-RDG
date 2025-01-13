import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { gender } from './initialValues'

type Props = {
  productIndex?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any
}
const FormSelectInputGender = ({ field }: Props) => {
  return (
    <>
      <FormItem className="w-full max-sm:w-full max-sm:text-start">
        <FormLabel className="text-primary/60 text-[16px]">Gender</FormLabel>
        <FormControl>
          <Select
            value={String(field.value)}
            onValueChange={(value) => field.onChange(value)}
          >
            <SelectTrigger className="focus:ring-2 focus:ring-primary/50 text-primary font-medium border-none outline-none shadow transition-all rounded w-full ring-1 ring-blue-300/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Gender</SelectLabel>
                {gender.map(
                  ({ value }, index) =>
                    value && (
                      <SelectItem
                        key={`${value}-${index}`}
                        className="text-primary"
                        value={value}
                      >
                        {value}
                      </SelectItem>
                    )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  )
}

export default FormSelectInputGender
